const lightBar = document.getElementById("lightBar");
const lights = [];
const colorSequence = ['red', 'darkred', 'firebrick', 'indianred', 'burlywood'];
let interval;
let currentIndex = 0;
let direction = 1;


for (let i = 0; i < 5; i++) {
    const light = document.createElement("div");
    light.classList.add("light");
    lightBar.appendChild(light);
    lights.push(light);
}

function updateLights() {
    lights.forEach((light, index) => {
        light.classList.remove("active");
        light.style.backgroundColor = '#222';
        light.style.boxShadow = 'none';
    });

    const color = colorSequence[currentIndex % colorSequence.length];
    const activeLight = lights[currentIndex];
    activeLight.classList.add("active");
    activeLight.style.backgroundColor = color;
    activeLight.style.boxShadow = '0 0 20px ${color}';

    currentIndex += direction;
    if (currentIndex === lights.length - 1 || currentIndex === 0) {
        direction *= -1;
    }
}

function startAnimation() {
    if (!interval) {
        interval = setInterval(updateLights, 150);
    }
}

function stopAnimation() {
    clearInterval(interval);
    interval = null;
}