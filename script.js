/* =====================================================================
   ✏️  EDIT EVERYTHING HERE — names, dates, text and all photos.
   Swap any URL for your own file, e.g. "images/hero.png".
   TIP: for the hero / platform / finale couple, a transparent PNG
   cut-out (background removed, e.g. remove.bg) gives the exact
   "standing in front of the giant name" look from the video.
   Put `cutout: true` below once you use a PNG cut-out.
   ===================================================================== */
const U = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

// each photo exists in 3 sizes: images/s (cards), images/m (big frames), images/ (lightbox only)
const SM = (p) => p.replace("images/", "images/s/"), MD = (p) => p.replace("images/", "images/m/"); 

const CONFIG = {
  name1: "PAGALA",
  name2: "PANDULU",
  finaleWord: "FOREVER",
  cutout: false,
  couple: {
    hero:     "images/p49.jpg",
    universe: "images/p66.jpg",
    platform: "images/p29.jpg",
    finale:   "images/p40.jpg",
    poster:   "images/p28.jpg",
  },
  // floating tiles in "The Love Universe" (icon tiles + photo tiles)
  tiles: [
    { x: 14, y: 30, s: 130, z: 120, icon: "heart",  label: "Love" },
    { x: 30, y: 44, s: 90,  z: 40,  icon: "ring",   label: "Promise" },
    { x: 24, y: 64, s: 80,  z: -60, photo: "images/p45.jpg" },
    { x: 8,  y: 70, s: 70,  z: -120, icon: "star",  label: "Dreams" },
    { x: 66, y: 26, s: 110, z: 80,  icon: "plane",  label: "Travel" },
    { x: 78, y: 42, s: 95,  z: 20,  photo: "images/p68.jpg" },
    { x: 70, y: 62, s: 90,  z: 100, icon: "camera", label: "Memories" },
    { x: 86, y: 70, s: 80,  z: -80, icon: "home",   label: "Home" },
    { x: 58, y: 74, s: 70,  z: -40, icon: "music",  label: "Our Song" },
    { x: 88, y: 22, s: 64,  z: -140, icon: "coffee", label: "Dates" },
  ],
  // "A Journey Through Time"
  journey: [
    { year: "2021", title: "First Hello",   text: "A crowded café, one borrowed pen — and a conversation that never ended.", img: "images/p06.jpg" },
    { year: "2022", title: "First Date",    text: "Cold coffee, nervous laughs and a sunset walk that lasted hours.",        img: "images/p10.jpg" },
    { year: "2023", title: "Adventures",    text: "Mountains, beaches, midnight road trips. Every place became ours.",        img: "images/p37.jpg" },
    { year: "2024", title: "Our Home",      text: "Two toothbrushes, one tiny kitchen, endless late-night talks.",           img: "images/p15.jpg" },
    { year: "2025", title: "She Said Yes",  text: "One knee, one ring, a thousand happy tears.",                              img: "images/p39.jpg" },
    { year: "2026", title: "Forever",       text: "The easiest promise we will ever keep.",                                  img: "images/p04.jpg" },
  ],
  // "Our dear family" strip
  family: [
    ["Family ♥", "images/p54.jpg"], ["Family ♥", "images/p55.jpg"], ["Family ♥", "images/p56.jpg"], ["Family ♥", "images/p57.jpg"],
    ["A beautiful memory", "images/p60.jpg"], ["A beautiful memory", "images/p61.jpg"], ["A beautiful memory", "images/p62.jpg"],
  ],
  // curved 3D wall in "Moments"
  since: "2021-02-14T00:00:00", // the day your love story began
  letterTo: "My dearest Pandulu,",
  letterFrom: "Pagala",
  letter: `From the moment you walked into my life, everything changed. The days got brighter, the nights felt softer, and even the silliest moments became memories I never want to forget.

You are my calm in every storm, my loudest laugh and my favourite hello. Thank you for choosing me, for loving my madness, and for making me the luckiest Pagala in the world.

Whatever tomorrow brings, I want to face it with your hand in mine. Today, tomorrow and every day after — it's you. It will always be you.`,
  reasons: [
    "Your smile fixes my worst days.",
    "You laugh at my silly jokes — even the bad ones.",
    "You make ordinary days feel like a movie.",
    "The way you say my name.",
    "You believe in me, even when I don't.",
    "Your hugs feel like home.",
    "You're my favourite notification.",
    "Because you're you — and that's everything.",
  ],
  moments: [
    ["Timeless Together", "images/p02.jpg", "50% 35%"],
    ["Golden Hour", "images/p03.jpg", "50% 15%"],
    ["Built On Love", "images/p09.jpg", "50% 40%"],
    ["Little Things", "images/p30.jpg", "50% 25%"],
    ["More Than A Moment", "images/p13.jpg", "50% 55%"],
    ["Home Is You", "images/p05.jpg", "50% 25%"],
    ["Our First Trip", "images/p14.jpg", "50% 55%"],
    ["Heartbeats", "images/p35.jpg", "50% 20%"],
    ["Hand In Hand", "images/p16.jpg", "50% 40%"],
    ["Sunday Mornings", "images/p38.jpg", "50% 25%"],
    ["City Lights", "images/p27.jpg", "50% 40%"],
    ["Laughing Always", "images/p46.jpg", "50% 25%"],
    ["Late Night Talks", "images/p42.jpg", "50% 30%"],
    ["Wander Together", "images/p50.jpg", "50% 20%"],
    ["Forever Yours", "images/p31.jpg", "50% 50%"],
    ["Pure Magic", "images/p51.jpg", "50% 38%"],
    ["Our Sunset", "images/p36.jpg", "50% 50%"],
    ["Sparkle", "images/p52.jpg", "50% 15%"],
    ["Sweet Escape", "images/p32.jpg", "50% 50%"],
    ["Her Smile", "images/p58.jpg", "50% 20%"],
    ["Side By Side", "images/p34.jpg", "50% 40%"],
    ["Dreamer", "images/p64.jpg", "50% 20%"],
    ["Temple Days", "images/p47.jpg", "50% 45%"],
    ["Grace", "images/p12.jpg", "50% 70%"],
    ["Perfect Match", "images/p48.jpg", "50% 45%"],
    ["Little Joys", "images/p08.jpg", "50% 20%"],
    ["Love Wins", "images/p67.jpg", "50% 40%"],
    ["Beautiful Soul", "images/p11.jpg", "50% 25%"],
    ["Together Always", "images/p43.jpg", "50% 40%"],
    ["My Everything", "images/p53.jpg", "50% 25%"],
  ],
};

/* ------------------------------ icons ------------------------------ */
const ICONS = {
  heart:  `<svg viewBox="0 0 24 24" fill="#ff4d3d"><path d="M12 21s-7-4.4-9.5-9C.8 8.6 3 5 6.5 5c2 0 3.5 1.2 5.5 3.2C14 6.2 15.5 5 17.5 5 21 5 23.2 8.6 21.5 12 19 16.6 12 21 12 21z"/></svg>`,
  ring:   `<svg viewBox="0 0 24 24" fill="none" stroke="#ffc766" stroke-width="1.6"><circle cx="12" cy="15" r="6"/><path d="M9 6l3-3 3 3-3 3z" fill="#fff3d6"/></svg>`,
  star:   `<svg viewBox="0 0 24 24" fill="#ffd35a"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.5l7.1-.6z"/></svg>`,
  plane:  `<svg viewBox="0 0 24 24" fill="#9fd4ff"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="#f3e9df" stroke-width="1.6"><rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8 7l2-3h4l2 3"/></svg>`,
  home:   `<svg viewBox="0 0 24 24" fill="none" stroke="#ffb07a" stroke-width="1.6"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>`,
  music:  `<svg viewBox="0 0 24 24" fill="#c9a7ff"><path d="M9 18a3 3 0 1 1-2-2.8V5l12-2v11a3 3 0 1 1-2-2.8V6.3L9 7.7z"/></svg>`,
  coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="#e0b48a" stroke-width="1.6"><path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 3v3M12 3v3"/></svg>`,
};

gsap.registerPlugin(ScrollTrigger);
// phones: the address bar showing/hiding must not recalculate every scroll animation (causes jumps)
ScrollTrigger.config({ ignoreMobileResize: true });
const IS_PHONE = window.innerWidth < 700 || matchMedia("(pointer: coarse)").matches;
const SD = Math.min(devicePixelRatio, IS_PHONE ? 1 : 2); // capped canvas pixel ratio

/* draws a small heart centred on (x, y), s = size in px */
function drawHeart(c, x, y, s, color) {
  c.save(); c.translate(x, y); c.scale(s / 14, s / 14); c.fillStyle = color;
  c.beginPath(); c.moveTo(0, 4); c.bezierCurveTo(-9, -3, -5, -11, 0, -6); c.bezierCurveTo(5, -11, 9, -3, 0, 4); c.fill(); c.restore();
}
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* ------------------------------ build DOM ------------------------------ */
$("#name1").textContent = CONFIG.name1;
$("#name2").textContent = CONFIG.name2;
// centre the couple photos via GSAP so later animations keep them centred
gsap.set("#uniCouple, #platCouple, #finaleCouple", { xPercent: -50 });
$("#finaleName").textContent = CONFIG.finaleWord;
$("#heroCouple").src = MD(CONFIG.couple.hero);
$("#uniCouple").src = MD(CONFIG.couple.universe);
$("#platCouple").src = SM(CONFIG.couple.platform);
$("#finaleCouple").src = MD(CONFIG.couple.finale);
$("#posterImg").src = MD(CONFIG.couple.poster);
if (CONFIG.cutout) $$("#uniCouple, #platCouple, #finaleCouple").forEach((i) => i.classList.add("cutout"));

$("#tiles").innerHTML = CONFIG.tiles.map((t, i) => `
  <div class="tile ${t.photo ? "photo" : ""}" data-z="${t.z}" style="left:${t.x}%;top:${t.y}%;--s:${t.s}px">
    ${t.photo ? `<img src="${SM(t.photo)}" alt="" loading="lazy" decoding="async" data-full="${t.photo}">` : `${ICONS[t.icon]}<span>${t.label}</span>`}
  </div>`).join("");

// on phones, tiles sit in two columns at the edges so they never cover the couple or run off-screen
const MOBILE_TILE_POS = [[4, 25], [76, 25], [4, 41], [76, 41], [4, 57], [76, 57], [4, 73], [76, 73], [22, 87], [58, 87]];
function placeTiles() {
  const mobile = window.innerWidth < 700;
  $$(".tile").forEach((t, i) => {
    const [x, y] = mobile ? MOBILE_TILE_POS[i % MOBILE_TILE_POS.length] : [CONFIG.tiles[i].x, CONFIG.tiles[i].y];
    t.style.left = x + "%"; t.style.top = y + "%";
  });
}
placeTiles(); window.addEventListener("resize", placeTiles);

$("#journeyMenu").innerHTML = CONFIG.journey.map((j) => `<li>${j.year} · ${j.title}</li>`).join("");
$("#jcards").innerHTML = CONFIG.journey.map((j) => `
  <article class="jcard" data-full="${j.img}" data-cap="${j.year} · ${j.title}"><img src="${SM(j.img)}" alt="" decoding="async"><div><b>${j.year}</b><span>${j.title}</span></div></article>`).join("");

$("#familyRail").innerHTML = CONFIG.family.map(([cap, src]) => `
  <figure class="fcard" data-full="${src}" data-cap="${cap}"><img src="${SM(src)}" alt="${cap}" loading="lazy" decoding="async"><figcaption>${cap}</figcaption></figure>`).join("");
$("#familyRail").addEventListener("click", (e) => { const c = e.target.closest(".fcard"); if (c) openPhoto(c.dataset.full, c.dataset.cap, c.querySelector("img").src); });

const MCOLS = 10;
$("#cyl").innerHTML = [0, 1, 2].map((row) =>
  Array.from({ length: MCOLS }, (_, i) => {
    const [cap, src, pos] = CONFIG.moments[(row * MCOLS + i) % CONFIG.moments.length];
    return `<div class="mcard" data-row="${row}" data-col="${i}" data-full="${src}" data-cap="${cap}"><img src="${SM(src)}" alt="" decoding="async" style="object-position:${pos || "50% 30%"}"><p>${cap}</p></div>`;
  }).join("")).join("");

$("#dots").innerHTML = "<i></i>".repeat(16);
$("#gateTitle").innerHTML = [...$("#gateTitle").textContent].map((c) => `<span class="c">${c === " " ? "&nbsp;" : c}</span>`).join("");

/* ------------------------------ gate + music ------------------------------ */
const audio = $("#bgm"), musicBtn = $("#musicBtn");
audio.volume = 0;
// songs play one after another; the Next button skips to the next one
const SONGS = [{ name: "Khat", src: "khat.mp3" }, { name: "O Mere Saajan", src: "saajan.mp3" }];
let song = 0;
function loadSong(i) { song = (i + SONGS.length) % SONGS.length; audio.src = SONGS[song].src; $("#songName").textContent = SONGS[song].name; }
function playMusic() {
  audio.play().then(() => { musicBtn.classList.add("playing"); gsap.to(audio, { volume: 0.85, duration: 1.5 }); }).catch(() => {});
}
$("#nextBtn").addEventListener("click", () => { loadSong(song + 1); audio.volume = 0; playMusic(); });
audio.addEventListener("ended", () => { loadSong(song + 1); audio.volume = 0; playMusic(); });
musicBtn.addEventListener("click", () => {
  if (audio.paused) playMusic();
  else gsap.to(audio, { volume: 0, duration: 0.5, onComplete: () => { audio.pause(); musicBtn.classList.remove("playing"); } });
});

gsap.timeline()
  .to("#gateTitle .c", { opacity: 1, y: 0, scaleY: 1, filter: "blur(0px)", stagger: 0.05, duration: 0.9, ease: "expo.out" })
  .to("#gateBar", { width: "100%", duration: 1.6, ease: "power2.inOut" }, 0)
  .to("#enterBtn", { opacity: 1, pointerEvents: "auto", duration: 0.5 });

$("#enterBtn").addEventListener("click", () => {
  playMusic();
  gsap.timeline({ onComplete: () => { $("#gate").remove(); document.body.classList.remove("locked"); ScrollTrigger.refresh(); } })
    .to(".gate-inner", { opacity: 0, scale: 0.94, duration: 0.5 })
    .to("#gate", { opacity: 0, duration: 0.6 })
    .add(heroIntro, "-=0.4");
});

/* ------------------------------ 1. HERO ------------------------------ */
gsap.set("#heroFrame", { opacity: 0, y: 60, scale: 0.94 });
function heroIntro() {
  gsap.timeline()
    .to(".hero-glow", { opacity: 1, duration: 1.2 })
    .to(".welcome", { opacity: 1, letterSpacing: ".5em", duration: 1.2 }, 0.2)
    // flame sweep: each line opens from the centre, the fire gradient runs across and settles on red
    .to("#heroName .fire", { clipPath: "inset(0 0% 0 0%)", duration: 1.3, stagger: 0.25, ease: "expo.inOut" }, 0.4)
    .to("#heroName .fire", { backgroundPosition: "0% 0", duration: 2.2, stagger: 0.25, ease: "power2.out" }, 0.4)
    .to(".hero-amp", { opacity: 1, duration: 0.8 }, 1.2)
    .to("#heroFrame", { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" }, 0.6)
    .to(".hero-sub, .hero-left .chip", { opacity: 1, stagger: 0.15, duration: 0.8 }, 1.5);
}
gsap.timeline({ scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } })
  .to(".hero-left", { yPercent: -25, opacity: 0.1, ease: "none" }, 0)
  .to("#heroFrame", { yPercent: 12, scale: 1.05, ease: "none" }, 0);

/* ------------------------------ 2. UNIVERSE ------------------------------ */
/* light-painting trail: a white-hot comet with a fading multi-strand tail that loops
   around the couple — drawn behind them on the far side of the loop, in front on the near side */
const tBack = $("#trailBack"), tFront = $("#trailFront");
const cB = tBack.getContext("2d"), cF = tFront.getContext("2d");
let TW = 0, TH = 0, DPR = SD;
function sizeTrail() {
  TW = tBack.offsetWidth; TH = tBack.offsetHeight;
  [tBack, tFront].forEach((c) => { c.width = TW * DPR; c.height = TH * DPR; c.getContext("2d").setTransform(DPR, 0, 0, DPR, 0, 0); });
}
sizeTrail(); window.addEventListener("resize", sizeTrail);

const trailPts = [], embers = [], TAIL = IS_PHONE ? 110 : 260, STRANDS = [
  { off: 0, w: 1, ph: 0 }, { off: 4, w: 0.5, ph: 1.7 }, { off: -5, w: 0.4, ph: 3.1 }, { off: 8, w: 0.28, ph: 4.4 },
];
let tt = 0;
function trailPos(t) {
  // tilted orbit ring around the couple (like the video): far half passes behind, near half in front
  const cx = TW * 0.5, cy = TH * 0.62, rx = TW < 700 ? TW * 0.42 : Math.min(TW * 0.34, 560), ry = TH * 0.12, tilt = -0.13;
  const ex = rx * Math.cos(t) * (1 + 0.05 * Math.sin(3 * t));
  const ey = ry * Math.sin(t) + ry * 0.22 * Math.sin(2 * t + 0.6);
  return { x: cx + ex * Math.cos(tilt) - ey * Math.sin(tilt), y: cy + ex * Math.sin(tilt) + ey * Math.cos(tilt), z: Math.sin(t) };
}
function drawTrail() {
  // pre-fill the tail so it is full length the moment the section appears
  if (!trailPts.length) for (let k = TAIL; k > 0; k--) trailPts.unshift(trailPos(tt += 0.012));
  tt += 0.012;
  const head = trailPos(tt);
  trailPts.unshift(head); if (trailPts.length > TAIL) trailPts.pop();
  // sparks shed from the head
  for (let k = 0; k < (IS_PHONE ? 1 : 3); k++) embers.push({ x: head.x, y: head.y, vx: (Math.random() - 0.5) * 2.2, vy: (Math.random() - 0.8) * 2, life: 1, r: Math.random() * 1.6 + 0.4, z: head.z });

  [cB, cF].forEach((c) => { c.globalCompositeOperation = "source-over"; c.clearRect(0, 0, TW, TH); c.globalCompositeOperation = "lighter"; c.lineCap = "round"; });

  // each strand is drawn in chunks of points (one path per chunk, 4 glow layers) — ~8x fewer strokes
  const CH = IS_PHONE ? 12 : 8, n = trailPts.length;
  STRANDS.slice(0, IS_PHONE ? 2 : 4).forEach((st) => {
    for (let k = 0; k < n - 1; k += CH) {
      const e = Math.min(k + CH, n - 1), mid = trailPts[(k + e) >> 1];
      const age = (k + e) / 2 / n, fade = Math.pow(1 - age, 1.1), w = st.w * (1 - age * 0.6);
      const ctx = mid.z > 0 ? cF : cB;
      ctx.beginPath();
      for (let i = k; i <= e; i++) {
        // offset the strand perpendicular to the path so strands cross and separate
        const a = trailPts[Math.max(0, i - 1)], b = trailPts[Math.min(n - 1, i + 1)], p = trailPts[i];
        const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1;
        const o = st.off * Math.sin(tt * 2 + i * 0.09 + st.ph) * (0.3 + i / n);
        const x = p.x - (dy / len) * o, y = p.y + (dx / len) * o;
        if (i === k) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      const layer = (width, color) => { ctx.strokeStyle = color; ctx.lineWidth = width; ctx.stroke(); };
      if (!IS_PHONE) layer(40 * w, `rgba(255,40,0,${0.07 * fade})`);    // wide red haze
      layer(16 * w, `rgba(255,75,10,${0.26 * fade})`);   // orange glow
      layer(6 * w, `rgba(255,120,35,${0.65 * fade})`);   // hot rim
      layer(2.2 * w, `rgba(255,205,150,${0.95 * fade})`); // warm core
    }
  });

  // blazing head
  const hctx = head.z > 0 ? cF : cB;
  const g = hctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 38);
  g.addColorStop(0, "rgba(255,230,190,1)"); g.addColorStop(0.15, "rgba(255,140,50,.9)"); g.addColorStop(0.45, "rgba(255,60,10,.4)"); g.addColorStop(1, "rgba(255,40,0,0)");
  hctx.fillStyle = g; hctx.beginPath(); hctx.arc(head.x, head.y, 38, 0, 6.283); hctx.fill();

  for (let i = embers.length - 1; i >= 0; i--) {
    const e = embers[i]; e.x += e.vx; e.y += e.vy; e.vy += 0.05; e.life -= 0.02;
    if (e.life <= 0) { embers.splice(i, 1); continue; }
    const ctx = e.z > 0 ? cF : cB;
    ctx.fillStyle = `rgba(255,${150 + 90 * e.life | 0},${60 * e.life | 0},${e.life})`;
    ctx.beginPath(); ctx.arc(e.x, e.y, e.r, 0, 6.283); ctx.fill();
  }
}
let trailOn = false, tileTweens = [];
ScrollTrigger.create({ trigger: "#universe", start: "top bottom", end: "bottom top", onToggle: (st) => {
  trailOn = st.isActive;
  tileTweens.forEach((t) => (st.isActive ? t.play() : t.pause()));
} });
(function trailLoop() { if (trailOn) drawTrail(); requestAnimationFrame(trailLoop); })();

if (!IS_PHONE) $$(".tile").forEach((t, i) => { // floating bob is desktop-only: 10 tiles animating in 3D is heavy on phones
  tileTweens[i] = gsap.to(t, { paused: !trailOn, y: "+=" + (10 + (i % 3) * 8), rotation: (i % 2 ? 4 : -4), duration: 2.4 + (i % 4) * 0.5, yoyo: true, repeat: -1, ease: "sine.inOut" });
});
const uni = $("#universe");
uni.addEventListener("mousemove", (e) => {
  const r = uni.getBoundingClientRect(), mx = (e.clientX - r.left) / r.width - 0.5, my = (e.clientY - r.top) / r.height - 0.5;
  $$(".tile").forEach((t) => {
    const z = +t.dataset.z;
    gsap.to(t, { x: mx * (z + 160) * 0.35, rotationY: mx * 25, rotationX: -my * 25, duration: 1, overwrite: "auto" });
  });
  gsap.to("#uniCouple", { x: mx * -20, duration: 1 });
});
gsap.from(".tile", { opacity: 0, scale: 0.4, z: -400, stagger: 0.07, duration: 1.2, ease: "back.out(1.6)", scrollTrigger: { trigger: uni, start: "top 65%" } });
gsap.from(".uni-head > *", { opacity: 0, y: 30, stagger: 0.15, duration: 1, scrollTrigger: { trigger: uni, start: "top 60%" } });
gsap.fromTo("#tiles", { yPercent: 10 }, { yPercent: -10, ease: "none", scrollTrigger: { trigger: uni, start: "top bottom", end: "bottom top", scrub: true } });

// sparks / embers — a glow sprite is drawn once and stamped, instead of a new gradient per particle
const cv = $("#sparks"), ctx = cv.getContext("2d");
const glow = document.createElement("canvas"); glow.width = glow.height = 64;
{ const g = glow.getContext("2d"), rg = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  rg.addColorStop(0, "rgba(255,200,120,1)"); rg.addColorStop(1, "rgba(255,90,20,0)"); g.fillStyle = rg; g.fillRect(0, 0, 64, 64); }
let sparks = [];
const MAX_SPARKS = IS_PHONE ? 22 : 100;
function sizeCv() { cv.width = cv.offsetWidth * SD; cv.height = cv.offsetHeight * SD; }
sizeCv(); window.addEventListener("resize", sizeCv);
(function loop() {
  requestAnimationFrame(loop);
  if (!trailOn) return;
  ctx.clearRect(0, 0, cv.width, cv.height);
  if (sparks.length < MAX_SPARKS) sparks.push({ x: Math.random() * cv.width, y: cv.height * (0.4 + Math.random() * 0.6), r: Math.random() * 2.2 + 0.4, vx: (Math.random() - 0.5) * 0.4, vy: -Math.random() * 0.8 - 0.2, life: 1, heart: Math.random() < 0.3 });
  ctx.globalCompositeOperation = "lighter";
  sparks.forEach((p) => {
    p.x += p.vx * SD; p.y += p.vy * SD; p.life -= 0.004;
    if (p.heart) { drawHeart(ctx, p.x, p.y, (p.r + 3) * 2.2 * SD, `rgba(255,90,80,${p.life * 0.75})`); return; }
    const d = p.r * 8 * SD;
    ctx.globalAlpha = Math.max(0, p.life); ctx.drawImage(glow, p.x - d / 2, p.y - d / 2, d, d); ctx.globalAlpha = 1;
  });
  sparks = sparks.filter((p) => p.life > 0);
})();

/* ------------------------------ 3. JOURNEY ------------------------------ */
const arcPath = $("#arcPath"), AL = arcPath.getTotalLength();
arcPath.style.strokeDasharray = AL; arcPath.style.strokeDashoffset = AL;
const N = CONFIG.journey.length;
const yearPts = CONFIG.journey.map((j, i) => arcPath.getPointAtLength(AL * (0.06 + (i / (N - 1)) * 0.88)));
$("#years").innerHTML = CONFIG.journey.map((j, i) => {
  const p = yearPts[i];
  return `<g class="yr" opacity="0"><circle class="yr-dot" cx="${p.x}" cy="${p.y}" r="5"/><text x="${p.x - 30}" y="${p.y - 18}">${j.year}</text></g>`;
}).join("");

function layoutJourney(animate) {
  if (window.innerWidth < 700) {
    // phone: carousel — the active year's card is big in the middle, neighbours peek from the sides
    const cw = Math.min(220, window.innerWidth * 0.5), a = Math.max(0, activeYear);
    $("#jcards").style.setProperty("--cw", cw + "px");
    $$(".jcard").forEach((c, i) => {
      const t = i - a;
      gsap[animate ? "to" : "set"](c, { x: t * cw * 0.95 - cw / 2, y: 0, z: -Math.abs(t) * 170, rotationY: -t * 28, opacity: Math.abs(t) > 1 ? 0 : Math.abs(t) ? 0.45 : 1, duration: 0.6, ease: "power3.out" });
    });
    const arc = $(".arc"), scale = arc.getBoundingClientRect().width / 1200, p = yearPts[a];
    gsap[animate ? "to" : "set"](arc, { xPercent: 0, x: window.innerWidth / 2 - p.x * scale, duration: 0.6, ease: "power3.out" });
    return;
  }
  gsap.set(".arc", { xPercent: -50, x: 0 }); // desktop: arc centred
  // fit every card (first year to last) inside the screen
  const gap = 18, avail = Math.min(window.innerWidth * 0.9, 1320);
  const cw = Math.min(210, (avail - gap * (N - 1)) / N);
  $("#jcards").style.setProperty("--cw", cw + "px");
  $$(".jcard").forEach((c, i) => {
    const t = i - (N - 1) / 2;
    gsap.set(c, { x: t * (cw + gap) - cw / 2, y: Math.abs(t) * -8, z: t * t * 8, rotationY: -t * 5, xPercent: 0 });
  });
}
window.addEventListener("resize", () => layoutJourney());

const PIVOT = { x: 690, y: 40 }, hand = { a: Math.PI / 2, l: 0 };
function drawHand() {
  $("#beam").setAttribute("x2", PIVOT.x + Math.cos(hand.a) * hand.l);
  $("#beam").setAttribute("y2", PIVOT.y + Math.sin(hand.a) * hand.l);
}
let activeYear = -1;
layoutJourney();
function setYear(i) {
  if (i === activeYear) return; activeYear = i;
  $$(".jcard").forEach((c, k) => c.classList.toggle("on", k === i));
  if (window.innerWidth < 700) layoutJourney(true);
  $$("#journeyMenu li").forEach((c, k) => c.classList.toggle("on", k === i));
  $$(".yr").forEach((g, k) => g.querySelector("circle").setAttribute("r", k === i ? 9 : 5));
  // clock-hand beam: the centre stays fixed, only the angle and length change
  const tx = yearPts[i].x - PIVOT.x, ty = yearPts[i].y - PIVOT.y;
  gsap.to(hand, { a: Math.atan2(ty, tx), l: Math.hypot(tx, ty), duration: 0.7, ease: "power3.out", onUpdate: drawHand });
  const info = $("#journeyInfo");
  info.querySelector("b").textContent = window.innerWidth < 700 ? `${CONFIG.journey[i].year} · ${CONFIG.journey[i].title}` : CONFIG.journey[i].year;
  info.querySelector("span").textContent = CONFIG.journey[i].text;
  gsap.fromTo(info, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });
}
gsap.timeline({
  scrollTrigger: {
    trigger: "#journey", start: "top top", end: "+=" + N * 260, pin: ".journey-pin", scrub: 0.5,
    onUpdate: (st) => { const p = st.progress; if (p > 0.15) setYear(Math.min(N - 1, Math.floor(((p - 0.15) / 0.85) * N))); },
  },
})
  .to(arcPath, { strokeDashoffset: 0, duration: 0.15, ease: "none" })
  .to(".yr", { opacity: 1, stagger: 0.02, duration: 0.05 }, 0.05)
  .from(".jcard", { opacity: 0, y: 80, stagger: 0.02, duration: 0.1 }, 0.05)
  .to({}, { duration: 0.85 }, 0.15);

/* ------------------------------ 4. MOMENTS (curved 3D wall) ------------------------------ */
const cards = $$(".mcard"), COLS = MCOLS;
let R = 760;
function layoutCyl() {
  const small = window.innerWidth < 700;
  R = small ? 720 : 1150;
  const rowH = small ? 125 : 210, span = 140;
  cards.forEach((c) => {
    const col = +c.dataset.col, row = +c.dataset.row;
    const a = -span / 2 + (col / (COLS - 1)) * span + (row % 2 ? span / COLS / 2 : 0);
    c.style.transform = `rotateY(${a}deg) translateZ(${-R}px) translateY(${(row - 1) * rowH}px)`;
  });
}
layoutCyl(); window.addEventListener("resize", layoutCyl);

let cylRot = 0, cylDrag = 0, dragging = false, lastX = 0;
const cylStage = $(".cyl-stage");
let downX = 0;
cylStage.addEventListener("pointerdown", (e) => { dragging = true; lastX = downX = e.clientX; cylStage.setPointerCapture(e.pointerId); });
cylStage.addEventListener("pointermove", (e) => { if (dragging) { cylDrag += (e.clientX - lastX) * 0.12; lastX = e.clientX; } });
cylStage.addEventListener("pointerup", (e) => {
  dragging = false;
  // a tap (not a drag) on a card opens it
  if (Math.abs(e.clientX - downX) < 6) {
    const card = document.elementFromPoint(e.clientX, e.clientY)?.closest(".mcard");
    if (card) openPhoto(card.dataset.full, card.dataset.cap, card.querySelector("img").src);
  }
});
let cylOn = false;
ScrollTrigger.create({ trigger: "#moments", start: "top bottom", end: "bottom top", onToggle: (st) => (cylOn = st.isActive) });
gsap.ticker.add(() => { if (cylOn) gsap.set("#cyl", { rotationY: cylRot + cylDrag + Math.sin(Date.now() / 3000) * 2, z: R * 0.6 }); });

gsap.timeline({ scrollTrigger: { trigger: "#moments", start: "top top", end: "+=900", pin: ".moments-pin", scrub: 0.5,
  onUpdate: (st) => (cylRot = -25 + st.progress * 50) } })
  .from(".mcard", { opacity: 0, scale: 0.6, stagger: { each: 0.004, from: "center" }, duration: 0.3 })
  .from(".platform i", { scale: 0.2, opacity: 0, stagger: 0.05, duration: 0.3 }, 0)
  .from("#platCouple", { opacity: 0, y: 40, duration: 0.3 }, 0.1)
  .to({}, { duration: 0.7 });

/* ------------------------------ 5. FINALE ------------------------------ */
gsap.timeline({ scrollTrigger: { trigger: "#forever", start: "top top", end: "+=1300", pin: ".finale-pin", scrub: 0.5 } })
  .to(".smoke", { opacity: 1, duration: 0.2 })
  .to("#finaleName", { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" }, 0.1)
  .to(".smoke", { opacity: 0.45, duration: 0.2 }, 0.3)
  .to("#finaleCouple", { opacity: 1, duration: 0.2 }, 0.3)
  .to("#finaleName", { scale: 0.9, duration: 0.2 }, 0.5)
  .to("#poster", { clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0% 100%)", duration: 0.25, ease: "power2.inOut" }, 0.6)
  .to("#poster", { clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)", duration: 0.1 }, 0.85)
  .from(".poster-text > *", { x: -60, opacity: 0, stagger: 0.03, duration: 0.1 }, 0.8)
  .from("#posterImg", { x: 120, opacity: 0, duration: 0.15 }, 0.75);

/* ------------------------------ photo viewer ------------------------------ */
const lb = $("#lightbox");
function openPhoto(src, cap = "", thumb) {
  // show the already-loaded thumbnail at once, then swap in the sharp large version when it arrives
  const big = src;
  $("#lbImg").src = thumb || big;
  if (thumb && thumb !== big) { const pre = new Image(); pre.onload = () => ($("#lbImg").src = big); pre.src = big; }
  $("#lbCap").textContent = cap;
  lb.hidden = false;
  gsap.fromTo(lb, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  gsap.fromTo("#lightbox figure", { scale: 0.85, y: 20 }, { scale: 1, y: 0, duration: 0.5, ease: "back.out(1.6)" });
}
function closePhoto() { gsap.to(lb, { opacity: 0, duration: 0.25, onComplete: () => (lb.hidden = true) }); }
lb.addEventListener("click", (e) => { if (e.target !== $("#lbImg")) closePhoto(); }); // clicking outside the image closes it
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) closePhoto(); });
$$(".jcard").forEach((c) => c.addEventListener("click", () => openPhoto(c.dataset.full, c.dataset.cap, c.querySelector("img").src)));
$$(".tile.photo img").forEach((i) => i.addEventListener("click", () => openPhoto(i.dataset.full, "", i.src)));

/* ------------------------------ floating hearts ------------------------------ */
const HDPR = SD;
function floatHearts(cvs, max = 28) {
  const c = cvs.getContext("2d"); let hs = [], on = false, W = 0, H = 0;
  const size = () => { W = cvs.width = cvs.offsetWidth * HDPR; H = cvs.height = cvs.offsetHeight * HDPR; };
  size(); window.addEventListener("resize", size);
  ScrollTrigger.create({ trigger: cvs.parentElement, start: "top bottom", end: "bottom top", onToggle: (st) => (on = st.isActive), onRefresh: size });
  (function f() {
    if (on) {
      c.clearRect(0, 0, W, H);
      if (hs.length < max && Math.random() < 0.1) hs.push({ x: Math.random() * W, y: H + 20, s: (8 + Math.random() * 16) * HDPR, v: (0.35 + Math.random() * 0.8) * HDPR, w: Math.random() * 6.28, a: 0.12 + Math.random() * 0.3 });
      hs.forEach((p) => { p.y -= p.v; p.w += 0.015; drawHeart(c, p.x + Math.sin(p.w) * 18 * HDPR, p.y, p.s, `rgba(255,70,70,${p.a * Math.min(1, (p.y / H) * 1.6)})`); });
      hs = hs.filter((p) => p.y > -40);
    }
    requestAnimationFrame(f);
  })();
}
["#heroHearts", "#loveHearts", "#promiseHearts"].forEach((id) => floatHearts($(id)));

/* heartbeat lines */
$$(".ecg path").forEach((p) => {
  p.style.setProperty("--len", Math.ceil(p.getTotalLength()));
  const base = p.cloneNode(); base.classList.add("base"); p.before(base);
});

/* ------------------------------ reasons I love you ------------------------------ */
$("#reasonsGrid").innerHTML = CONFIG.reasons.map((r, i) => `
  <button class="reason" aria-label="Reason ${i + 1}"><div class="r-inner">
    <div class="r-front"><b>${String(i + 1).padStart(2, "0")}</b><i>♥</i><span>REASON</span></div>
    <div class="r-back"><p>${r}</p></div>
  </div></button>`).join("");
$$(".reason").forEach((r) => r.addEventListener("click", () => r.classList.toggle("flipped")));
gsap.from(".reason", { y: 70, opacity: 0, rotateX: -25, stagger: 0.08, duration: 1, ease: "power3.out", scrollTrigger: { trigger: "#reasons", start: "top 70%" } });
gsap.from("#reasons .sec-title", { scale: 0.8, opacity: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: "#reasons", start: "top 75%" } });

/* ------------------------------ together counter ------------------------------ */
const since = new Date(CONFIG.since);
function tickLove() {
  let t = Math.max(0, Math.floor((Date.now() - since) / 1000));
  const d = Math.floor(t / 86400); t %= 86400;
  const hh = Math.floor(t / 3600); t %= 3600;
  $("#cDays").textContent = d.toLocaleString(); $("#cHours").textContent = hh; $("#cMins").textContent = Math.floor(t / 60); $("#cSecs").textContent = t % 60;
}
tickLove(); setInterval(tickLove, 1000);
gsap.from(".count-grid div", { y: 60, opacity: 0, stagger: 0.12, duration: 1, ease: "power3.out", scrollTrigger: { trigger: "#together", start: "top 70%" } });

/* ------------------------------ love letter ------------------------------ */
$("#letterTo").textContent = CONFIG.letterTo;
$("#letterFrom").textContent = CONFIG.letterFrom;
$("#rest").textContent = CONFIG.letter; // full text is laid out (invisible) first so the page height never jumps
let letterOpen = false, typing = null;
function finishTyping() { clearInterval(typing); $("#typed").textContent = CONFIG.letter; $("#rest").textContent = ""; $(".letter-body").classList.add("done"); }
function typeLetter() {
  let i = 0;
  typing = setInterval(() => {
    i += 2;
    $("#typed").textContent = CONFIG.letter.slice(0, i); $("#rest").textContent = CONFIG.letter.slice(i);
    if (i >= CONFIG.letter.length) finishTyping();
  }, 28);
}
function openLetter() {
  if (letterOpen) return; letterOpen = true;
  gsap.timeline()
    .to("#seal", { scale: 0, rotate: 120, duration: 0.45, ease: "back.in(2)" })
    .to("#letterHint", { opacity: 0, duration: 0.3 }, 0)
    .to(".env-flap", { rotateX: 180, duration: 0.8, ease: "power2.inOut" })
    .set(".env-flap", { zIndex: 1 })
    .to(".env-peek", { yPercent: -40, duration: 0.6, ease: "power2.out" })
    .add(() => { $("#letterPaper").hidden = false; ScrollTrigger.refresh(); typeLetter(); })
    .fromTo("#letterPaper", { scaleY: 0, opacity: 0 }, { scaleY: 1, opacity: 1, duration: 1, ease: "expo.out" })
    .to("#envelope", { opacity: 0, scale: 0.7, height: 0, marginTop: 0, duration: 0.7, ease: "power2.inOut" }, "-=0.7")
    .to("#letterHint", { height: 0, margin: 0, duration: 0.3 }, "<")
    .add(() => { ScrollTrigger.refresh(); $("#letterPaper").scrollIntoView({ behavior: "smooth", block: "center" }); });
}
$("#envelope").addEventListener("click", openLetter);
$("#letterPaper").addEventListener("click", finishTyping); // tap the letter to show it all at once
gsap.from("#envelope", { y: 80, opacity: 0, rotate: -4, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: "#letter", start: "top 65%" } });

/* ------------------------------ one last question ------------------------------ */
const yesBtn = $("#yesBtn"), noBtn = $("#noBtn"), promise = $("#promise");
const NO_TEXT = ["NO", "Are you sure?", "Pakka? 🥺", "Think again!", "Pleeease", "Wrong button!", "Try the other one ♥"];
let noTries = 0, yesScale = 1;
function flee(e) {
  if (e) e.preventDefault();
  const sec = promise.getBoundingClientRect();
  if (noBtn.parentElement !== promise) {
    const r = noBtn.getBoundingClientRect();
    promise.appendChild(noBtn);
    Object.assign(noBtn.style, { position: "absolute", left: r.left - sec.left + "px", top: r.top - sec.top + "px" });
  }
  noTries++; noBtn.textContent = NO_TEXT[noTries % NO_TEXT.length];
  const bw = noBtn.offsetWidth, bh = noBtn.offsetHeight, y = yesBtn.getBoundingClientRect();
  const yx = y.left - sec.left + y.width / 2, yy = y.top - sec.top + y.height / 2;
  let nx, ny, tries = 0;
  do {
    nx = 20 + Math.random() * (sec.width - bw - 40);
    ny = sec.height * 0.12 + Math.random() * (sec.height * 0.76 - bh);
  } while (Math.hypot(nx + bw / 2 - yx, ny + bh / 2 - yy) < 220 && ++tries < 40);
  gsap.to(noBtn, { left: nx, top: ny, duration: 0.35, ease: "power3.out" });
  yesScale = Math.min(yesScale + 0.12, 2); gsap.to(yesBtn, { scale: yesScale, duration: 0.3 });
}
noBtn.addEventListener("pointerenter", flee);
noBtn.addEventListener("touchstart", flee, { passive: false });
noBtn.addEventListener("click", flee);

const burst = $("#burst"), bctx = burst.getContext("2d");
let bits = [];
function heartBurst(x, y) {
  burst.width = burst.offsetWidth * HDPR; burst.height = burst.offsetHeight * HDPR;
  const cols = ["#ff3b2f", "#ff6b6b", "#ffd35a", "#ff9aa2", "#fff1e6"];
  for (let i = 0; i < 160; i++) {
    const a = Math.random() * 6.283, v = (3 + Math.random() * 9) * HDPR;
    bits.push({ x: x * HDPR, y: y * HDPR, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 4 * HDPR, s: (10 + Math.random() * 18) * HDPR, c: cols[i % cols.length], life: 1 });
  }
  (function f() {
    bctx.clearRect(0, 0, burst.width, burst.height);
    bits.forEach((b) => { b.x += b.vx; b.y += b.vy; b.vy += 0.18 * HDPR; b.vx *= 0.985; b.life -= 0.008; bctx.globalAlpha = Math.max(0, b.life); drawHeart(bctx, b.x, b.y, b.s, b.c); });
    bctx.globalAlpha = 1;
    bits = bits.filter((b) => b.life > 0 && b.y < burst.height + 40);
    if (bits.length) requestAnimationFrame(f); else bctx.clearRect(0, 0, burst.width, burst.height);
  })();
}
yesBtn.addEventListener("click", () => {
  const r = yesBtn.getBoundingClientRect(), sec = promise.getBoundingClientRect();
  heartBurst(r.left - sec.left + r.width / 2, r.top - sec.top + r.height / 2);
  gsap.to(noBtn, { scale: 0, opacity: 0, duration: 0.4 });
  yesBtn.textContent = "FOREVER ♥";
  const ans = $("#promiseAns"); ans.hidden = false;
  gsap.fromTo(ans, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.3 });
});
gsap.from(".promise-q", { y: 60, opacity: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: "#promise", start: "top 65%" } });

/* ------------------------------ hearts pop wherever you click ------------------------------ */
document.addEventListener("pointerdown", (e) => {
  if (e.target.closest("#lightbox, #gate")) return;
  for (let i = 0; i < 4; i++) {
    const h = document.createElement("span");
    h.className = "pop-heart"; h.textContent = "♥";
    document.body.appendChild(h);
    gsap.fromTo(h, { x: e.clientX, y: e.clientY, scale: 0.4, opacity: 1 },
      { x: e.clientX + (Math.random() - 0.5) * 90, y: e.clientY - 50 - Math.random() * 70, scale: 0.8 + Math.random(), rotate: (Math.random() - 0.5) * 60, opacity: 0, duration: 0.9 + Math.random() * 0.4, ease: "power2.out", onComplete: () => h.remove() });
  }
});

/* ------------------------------ side nav / dots ------------------------------ */
const secs = ["#hero", "#universe", "#journey", "#moments", "#family", "#reasons", "#letter", "#forever", "#together", "#promise"];
const navIndex = [0, 1, 2, 3, 4, 5, 6, 7, 5, 7]; // together → Reasons, promise → Forever
secs.forEach((s, j, _, i = navIndex[j]) => ScrollTrigger.create({
  trigger: s, start: "top center", end: "bottom center",
  onToggle: (st) => {
    if (!st.isActive) return;
    $$(".side-left a").forEach((a, k) => a.classList.toggle("on", k === i));
    $$(".topbar nav a").forEach((a, k) => a.classList.toggle("active", k === i));
    $$("#dots i").forEach((d, k) => d.classList.toggle("on", k === i * 2 || k === i * 2 + 1));
  },
}));

/* preview helper: open index.html?auto&y=1500 to skip the gate and jump to a scroll position */
const qs = new URLSearchParams(location.search);
if (qs.has("auto")) setTimeout(() => { $("#enterBtn").click(); setTimeout(() => window.scrollTo(0, +qs.get("y") || 0), 1500); }, 1800);

/* re-apply phone/desktop layouts once the real viewport width is known */
const relayout = () => { placeTiles(); layoutJourney(); ScrollTrigger.refresh(); };
document.addEventListener("DOMContentLoaded", relayout);
window.addEventListener("load", relayout);
