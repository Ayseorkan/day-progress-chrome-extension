// Calculate day progress ratio (0 - 1)
function getProgress() {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const seconds = (now - start) / 1000;
  return seconds / 86400;
}

// Draw dynamic progress icon
function drawIcon() {
  const progress = getProgress();
  const canvas = new OffscreenCanvas(16, 16);
  const ctx = canvas.getContext("2d");

  // Background bar
  ctx.fillStyle = "#e8ecf1";
  ctx.fillRect(0, 6, 16, 4);

  // Filled progress
  ctx.fillStyle = "#2F5E8E";
  ctx.fillRect(0, 6, 16 * progress, 4);

  const imageData = ctx.getImageData(0, 0, 16, 16);
  chrome.action.setIcon({ imageData });
}

// Initialize icon on key events
chrome.runtime.onStartup.addListener(drawIcon);
chrome.runtime.onInstalled.addListener(drawIcon);
chrome.action.onClicked.addListener(drawIcon);

// Update icon periodically (every hour)
setInterval(drawIcon, 3600000);
// Fallback initial render
drawIcon(); 