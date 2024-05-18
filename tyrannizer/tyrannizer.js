const canvas = document.getElementById('tyrannizer');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const img = new Image();
img.src = 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-E8B9209B40BA44BE387CDA0D86A107A3-Png/150/150/AvatarHeadshot/Webp/noFilter';

let x = Math.random() * (canvas.width - 150);
let y = Math.random() * (canvas.height - 150);
let dx = 2;
let dy = 2;
const imgWidth = 150;
const imgHeight = 150;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, imgWidth, imgHeight);

    x += dx;
    y += dy;

    if (x + imgWidth > canvas.width || x < 0) {
        dx = -dx;
    }

    if (y + imgHeight > canvas.height || y < 0) {
        dy = -dy;
    }

    requestAnimationFrame(animate);
}

img.onload = function() {
    animate();
};
