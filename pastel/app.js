/* ===== EDIT HERE: text, dates and chapter names ===== */
const CONFIG = {
  since: "2021-10-23T00:00:00",
  letterTo: "My dearest Pandulu,",
  letterFrom: "Pagala",
  letter: [
    "From the moment you walked into my life, everything changed. The days got brighter, the nights felt softer, and even the silliest moments became memories I never want to forget.",
    "You are my calm in every storm, my loudest laugh and my favourite hello. Thank you for choosing me, for loving my madness, and for making me the luckiest Pagala in the world.",
    "Whatever tomorrow brings, I want to face it with your hand in mine. Today, tomorrow and every day after — it's you. It will always be you.",
  ],
  reasons: [
    "Your smile fixes my worst days.", "You laugh at my silly jokes — even the bad ones.", "You make ordinary days feel like a movie.", "The way you say my name.",
    "You believe in me, even when I don't.", "Your hugs feel like home.", "You're my favourite notification.", "Because you're you — and that's everything.",
  ],
  chapters: [
    { key: "us",   title: "Hum Dono",       chip: "Hum Dono",  sub: "Selfies, temples, long rides and every little adventure — together." },
    { key: "her",  title: "My Pandulu",     chip: "Pandulu",   sub: "Saree, smiles, sunsets… she looks beautiful in every single frame." },
    { key: "fam",  title: "Our People",     chip: "Family",    sub: "The ones who make our story warmer." },
    { key: "hero", title: "Our Superheroes", chip: "Heroes",   sub: "Because in my story, you're a warrior." },
  ],
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const img = (id, size = "s") => `../images/${size === "full" ? "" : size + "/"}p${String(id).padStart(2, "0")}.jpg`;

/* ---------- gate + music ---------- */
$("#gatePhotos").innerHTML = [6, 49, 37].map((id) => `<img src="${img(id)}" alt="">`).join("");
const SONGS = [{ name: "Our song", src: "../music.mp3" }, { name: "Khat", src: "../khat.mp3" }]; // add more songs here
const audio = $("#bgm"), musicBtn = $("#musicBtn");
let song = 0;
function loadSong(i) { song = (i + SONGS.length) % SONGS.length; audio.src = SONGS[song].src; $("#songName").textContent = SONGS[song].name; }
function playMusic() { audio.volume = 0.8; audio.play().then(() => musicBtn.classList.add("playing")).catch(() => {}); }
musicBtn.addEventListener("click", () => {
  if (audio.paused) playMusic(); else { audio.pause(); musicBtn.classList.remove("playing"); }
});
$("#nextBtn").addEventListener("click", () => { loadSong(song + 1); playMusic(); });
audio.addEventListener("ended", () => { loadSong(song + 1); playMusic(); }); // plays the songs one after another
loadSong(0);
$("#enterBtn").addEventListener("click", () => {
  playMusic();
  $("#gate").classList.add("out"); document.body.classList.remove("locked");
  setTimeout(() => $("#gate").remove(), 700);
});

/* ---------- hero: floating hearts + photo bubbles ---------- */
$("#floaters").innerHTML = Array.from({ length: 14 }, (_, i) => {
  const s = 14 + Math.random() * 22;
  return `<span style="left:${Math.random() * 100}%;font-size:${s}px;animation-duration:${9 + Math.random() * 9}s;animation-delay:${-Math.random() * 14}s">${i % 3 ? "♥" : "♡"}</span>`;
}).join("");
const BUB = [[49, 4, 8, 92, 5.5], [6, 70, 10, 104, 7], [37, -5, 52, 96, 6.2], [10, 78, 55, 86, 5], [36, -4, 86, 84, 6.8], [4, 76, 88, 80, 7.4]];
$("#bubbles").innerHTML = BUB.map(([id, x, y, d, t]) =>
  `<div class="b" style="left:${x}%;top:${y}%;width:${d}px;height:${d}px;animation-duration:${t}s"><img src="${img(id)}" alt="" decoding="async"></div>`).join("");

/* ---------- time together ---------- */
const since = new Date(CONFIG.since);
function tick() {
  const n = new Date();
  let y = n.getFullYear() - since.getFullYear(), m = n.getMonth() - since.getMonth(), d = n.getDate() - since.getDate();
  if (d < 0) { m--; d += new Date(n.getFullYear(), n.getMonth(), 0).getDate(); }
  if (m < 0) { y--; m += 12; }
  $("#cY").textContent = y; $("#cM").textContent = m; $("#cD").textContent = d; $("#cH").textContent = n.getHours();
}
tick(); setInterval(tick, 60000);

/* ---------- chapters + masonry ---------- */
const order = []; // flat list for the viewer: {src, full, cap, group}
$("#gallery").innerHTML = CONFIG.chapters.map((c) => {
  const list = PHOTOS[c.key];
  const items = list.map(([id, w, h], i) => {
    const idx = order.push({ full: img(id, "full"), cap: `${c.title} · ${i + 1}/${list.length}` }) - 1;
    return `<figure class="ph" data-i="${idx}" style="aspect-ratio:${w}/${h}"><img src="${img(id)}" width="${w}" height="${h}" alt="${c.title}" loading="lazy" decoding="async"></figure>`;
  }).join("");
  return `<section class="chapter" id="${c.key}">
    <div class="chapter-head"><p class="kicker">chapter</p><h2 class="script">${c.title}</h2><p class="sub">${c.sub}</p><span class="count-pill">${list.length} photos ♥</span></div>
    <div class="grid${list.length <= 3 ? " few" : ""}">${items}</div></section>`;
}).join("");
$("#chips").innerHTML = CONFIG.chapters.map((c) => `<a href="#${c.key}" data-k="${c.key}">${c.chip}</a>`).join("");

/* ---------- reveal on scroll (cheap: one observer, no scroll handlers) ---------- */
const reveal = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); } }), { rootMargin: "0px 0px -6% 0px" });
$$(".ph").forEach((el) => reveal.observe(el));
const chipObs = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) $$(".chips a").forEach((a) => a.classList.toggle("on", a.dataset.k === e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$(".chapter").forEach((s) => chipObs.observe(s));

/* ---------- reasons + letter ---------- */
$("#rail").innerHTML = CONFIG.reasons.map((r) => `<div class="rcard">${r}</div>`).join("");
$("#letterTo").textContent = CONFIG.letterTo;
$("#letterFrom").textContent = CONFIG.letterFrom;
$("#letterBody").innerHTML = CONFIG.letter.map((p) => `<p>${p}</p>`).join("");

/* ---------- photo viewer (tap, swipe, arrows) ---------- */
const lb = $("#lb"), lbImg = $("#lbImg");
let cur = 0;
function show(i) {
  cur = (i + order.length) % order.length;
  lbImg.src = order[cur].full; $("#lbCap").textContent = order[cur].cap;
  [cur + 1, cur - 1].forEach((n) => { const p = new Image(); p.src = order[(n + order.length) % order.length].full; }); // preload neighbours
}
function openLb(i) { show(i); lb.hidden = false; document.body.classList.add("locked"); }
function closeLb() { lb.hidden = true; document.body.classList.remove("locked"); }
$("#gallery").addEventListener("click", (e) => { const f = e.target.closest(".ph"); if (f) openLb(+f.dataset.i); });
$("#lbX").addEventListener("click", closeLb);
$("#lbPrev").addEventListener("click", () => show(cur - 1));
$("#lbNext").addEventListener("click", () => show(cur + 1));
lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLb(); else if (e.key === "ArrowRight") show(cur + 1); else if (e.key === "ArrowLeft") show(cur - 1);
});
let sx = null;
lb.addEventListener("pointerdown", (e) => { sx = e.clientX; });
lb.addEventListener("pointerup", (e) => {
  if (sx === null) return;
  const dx = e.clientX - sx; sx = null;
  if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
});

/* ---------- finale: hearts burst ---------- */
function burst(x, y, n = 22) {
  for (let i = 0; i < n; i++) {
    const h = document.createElement("span");
    h.className = "pop"; h.textContent = ["♥", "💗", "💕", "✨"][i % 4]; h.style.left = x + "px"; h.style.top = y + "px";
    document.body.appendChild(h);
    const a = Math.random() * 6.283, d = 80 + Math.random() * 140;
    h.animate([{ transform: "translate(-50%,-50%) scale(.4)", opacity: 1 },
      { transform: `translate(${Math.cos(a) * d - 12}px,${Math.sin(a) * d - 80}px) scale(${.8 + Math.random()})`, opacity: 0 }],
      { duration: 1100 + Math.random() * 600, easing: "cubic-bezier(.2,.7,.3,1)" }).onfinish = () => h.remove();
  }
}
$("#yes").addEventListener("click", (e) => { burst(e.clientX, e.clientY, 34); $("#yesMsg").hidden = false; $("#yes").textContent = "Forever ♥"; });
document.addEventListener("pointerdown", (e) => { if (!e.target.closest("#lb, #gate, button, a")) burst(e.clientX, e.clientY, 4); });
