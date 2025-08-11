// ========================
// CONFIGURE YOUR IMAGES HERE
// ========================
const IMAGES = [
  // Example:
  { src: "images/saddog1.jpg", cap: "Doggo is said you didn't lock your computer.... 😢" },
  { src: "images/vader.jpeg", cap: "Vader finds your unlocked screen disturbing." }
  // { src: "images/funny.png", cap: "Funny caption" },
];

// DOM refs
const app = document.getElementById('app');
const timerEl = document.getElementById('timer');
const gallery = document.getElementById('gallery');
const helpBtn = document.getElementById('helpBtn');
const helpModal = document.getElementById('helpModal');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const heroTitle = document.querySelector('h1');

// Timer
let start = Date.now();
setInterval(() => {
  const secs = Math.floor((Date.now() - start) / 1000);
  timerEl.textContent = secs.toLocaleString();
}, 250);

// Pick one random image
if (IMAGES.length > 0) {
  const randomImg = IMAGES[Math.floor(Math.random() * IMAGES.length)];

  // If a caption is set, make it the big title
  if (randomImg.cap) {
    heroTitle.textContent = randomImg.cap;
  }

  const img = document.createElement('img');
  img.src = randomImg.src;
  img.alt = randomImg.cap || "Image";
  img.className = 'max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg border border-gray-700';
  gallery.append(img);

} else {
  const msg = document.createElement('p');
  msg.textContent = "No images configured yet.";
  msg.className = "text-gray-400 text-lg";
  gallery.append(msg);
}

app.classList.remove('hidden');

// Full screen button
fullscreenBtn.addEventListener('click', async () => {
  try { await document.documentElement.requestFullscreen(); } catch (e) {}
});

// Help modal
helpBtn.addEventListener('click', () => helpModal.showModal());