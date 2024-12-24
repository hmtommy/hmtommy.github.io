// Function to flicker an element
function flicker(element) {
    const randomDelay = Math.random() * 1500; // Random delay up to 1.5 seconds
    setTimeout(() => {
        element.style.opacity = element.style.opacity === "1" ? "0.2" : "1";
        flicker(element); // Recursively call flicker to repeat
    }, randomDelay);
}

// Get the elements and apply flicker
const tommy = document.getElementById("tommy");
const yh = document.getElementById("yh");

flicker(tommy);
flicker(yh);

// Add hover effect to increase size
tommy.addEventListener('mouseenter', () => {
    tommy.classList.add('hovered');
});
tommy.addEventListener('mouseleave', () => {
    tommy.classList.remove('hovered');
});

yh.addEventListener('mouseenter', () => {
    yh.classList.add('hovered');
});
yh.addEventListener('mouseleave', () => {
    yh.classList.remove('hovered');
});

// Add click event for bounce animation
tommy.addEventListener('click', () => {
    tommy.classList.add('clicked');
    setTimeout(() => {
        tommy.classList.remove('clicked');
    }, 500); // Remove bounce after 500ms
});

yh.addEventListener('click', () => {
    yh.classList.add('clicked');
    setTimeout(() => {
        yh.classList.remove('clicked');
    }, 500); // Remove bounce after 500ms
});

// Random movement effect
function randomMove(element) {
    const maxX = window.innerWidth - element.offsetWidth;
    const maxY = window.innerHeight - element.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    element.style.transition = 'transform 1s ease-in-out';
    element.style.transform = `translate(${randomX}px, ${randomY}px)`;

    setTimeout(() => randomMove(element), 2000); // Repeat random movement every 2 seconds
}

randomMove(tommy);
randomMove(yh);
