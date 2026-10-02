# Gemini prompts — enhance our 59 real photos

## Pehle yeh karo
1. Apni 59 photos ko `01.jpg … 59.jpg` naam do (ek folder me). Naam badalna zaroori hai, taaki Gemini ke output se match ho sake.
2. Gemini me **ek naya chat** kholo. Ek chat me 8–10 photos se zyada mat daalo (59 ek saath nahi chalengi) — 6–7 batches me karo.
3. Pehle **STEP 1** paste karo, phir har batch me photos upload karke **STEP 2** paste karo.
4. Output ko same number ke naam se save karo (`01.jpg`…), aur sab ko ek folder/zip me daalo. Zip mujhe de do, baaki main karunga (crop, compress, dashboard me lagana).

---

## STEP 1 — style set karne ke liye (sirf ek baar)

```
I am building a cinematic love-story website for me and my partner. I will upload our REAL photos in batches. Your job is to ENHANCE each photo, not to create new people or new scenes.

Rules for every photo:
1. Keep the exact same faces, expressions, pose, clothes and composition. Do NOT change, replace or "beautify" faces, skin tone, body or age. We must look like ourselves.
2. Enhance only: fix lighting, sharpen, remove noise, clean up distractions in the background (random strangers, bins, wires) and upscale to the highest quality possible.
3. Colour grade: cinematic film look, shot on 35mm, soft film grain. Deep dark shadows, warm red / orange / golden highlights (sunset or firelight feel). No neon blue or green. Skin must stay natural and warm.
4. Composition: keep both of us in the centre ~70% of the frame with some breathing space around the heads and edges, because the website crops and fades the borders. Do not crop us tight. Keep the original orientation (portrait stays portrait, landscape stays landscape).
5. Absolutely no text, letters, watermark, logo, border or frame.
6. Output one image per photo, in the same order I upload, and tell me the number (01, 02, ...) I gave in the file name above each output.

Reply "ready" and wait for my first batch.
```

---

## STEP 2 — har batch ke saath paste karo

```
Here is the next batch of photos (file names are the numbers). Enhance each one following the rules from before. Keep faces, poses and composition exactly the same. Give me each result as a separate high-resolution image, labelled with its file number.
```

---

## Agar kisi photo me chehra badal jaye
```
The face in image NN does not match my original photo. Redo it using only light, colour and sharpness enhancement. Do not regenerate or reshape the face — keep it identical to the original.
```

## Agar photo zyada "AI" ya plastic lage
```
Too smooth and artificial. Redo with natural skin texture, visible film grain and a more subtle warm cinematic grade. Keep the original photo's look.
```

---

## Mere liye notes (main karunga)
- 59 photos ko slots me baantunga: hero / universe / platform / finale / poster (5), tiles (2), journey 2021–2026 (6), aur Moments wall (baaki, 3×10 = 30 cards tak unique).
- Resize + compress (~300–500 KB), `images/` me daalunga, `script.js` ke CONFIG me paths badalunga.
- Hero/platform/finale ke liye cut-out (transparent background) main locally karunga, Gemini se nahi.
