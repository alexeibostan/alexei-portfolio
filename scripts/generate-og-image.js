import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';
import path from 'path';

// This is a Node.js script to generate a high-quality OG image
// Run with: node scripts/generate-og-image.js

const generateOGImage = async () => {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, '#0F172A');
  gradient.addColorStop(1, '#1E293B');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);

  // Main title
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 64px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Alexei Bostan', 600, 200);

  // Subtitle
  ctx.fillStyle = '#94A3B8';
  ctx.font = '32px Arial, sans-serif';
  ctx.fillText('Senior Software Engineer & Tech Lead', 600, 260);

  // Description
  ctx.font = '24px Arial, sans-serif';
  ctx.fillText('Building scalable web applications with React, Next.js & FastAPI', 600, 320);

  // Website URL
  ctx.fillStyle = '#3B82F6';
  ctx.font = 'bold 28px Arial, sans-serif';
  ctx.fillText('alexeibostan.com', 600, 420);

  // Tech stack badges
  const badges = ['React', 'Next.js', 'Python', 'TypeScript', 'FastAPI'];
  const badgeWidth = 120;
  const badgeHeight = 35;
  const startX = (1200 - badges.length * badgeWidth - (badges.length - 1) * 20) / 2;

  badges.forEach((badge, index) => {
    const x = startX + index * (badgeWidth + 20);
    const y = 480;

    // Badge background
    ctx.fillStyle = '#334155';
    ctx.roundRect(x, y, badgeWidth, badgeHeight, 18);
    ctx.fill();

    // Badge text
    ctx.fillStyle = '#E2E8F0';
    ctx.font = '16px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(badge, x + badgeWidth / 2, y + 23);
  });

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  const outputPath = path.join(process.cwd(), 'public', 'og-image.png');
  fs.writeFileSync(outputPath, buffer);
  
  console.log('✅ OG image generated successfully at public/og-image.png');
};

// Add roundRect polyfill if not available
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius) {
    this.beginPath();
    this.moveTo(x + radius, y);
    this.lineTo(x + width - radius, y);
    this.quadraticCurveTo(x + width, y, x + width, y + radius);
    this.lineTo(x + width, y + height - radius);
    this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    this.lineTo(x + radius, y + height);
    this.quadraticCurveTo(x, y + height, x, y + height - radius);
    this.lineTo(x, y + radius);
    this.quadraticCurveTo(x, y, x + radius, y);
    this.closePath();
  };
}

generateOGImage().catch(console.error);
