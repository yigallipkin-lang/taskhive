const fs = require('fs');
const { createCanvas } = require('canvas');

// Function to draw a bee icon
function drawBee(ctx, size) {
    // Draw bee body
    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 * 0.4, 0, Math.PI * 2);
    ctx.fill();

    // Draw bee wings
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.ellipse(size / 2 - 15, size / 2 - 15, 15, 25, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(size / 2 + 15, size / 2 - 15, 15, 25, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Sizes for the icons
const sizes = [192, 512, 180];
const outputDir = 'icons/';

// Create icons directory if it does not exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Generate icons
sizes.forEach(size => {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    drawBee(ctx, size);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(`${outputDir}bee-icon-${size}.png`, buffer);
});

console.log('Icons generated successfully!');
