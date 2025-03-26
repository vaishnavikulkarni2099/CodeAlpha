const dynamicText = document.getElementById('dynamic-text');

const textArray = [
    "Web Developer",
    "Creative Designer",
    "Problem Solver",
    "Freelancer"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        dynamicText.innerHTML += textArray[textIndex][charIndex];
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        dynamicText.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();
