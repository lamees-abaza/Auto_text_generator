const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");
const words = ["Awesome", "Fun", "Cool", "Life", "Famous", "Weird"];
const typingDelay = 200; // Delay between each letter typed
const erasingDelay = 100; // Delay between each letter erased
const newWordDelay = 2000; // Delay before starting to type the next word
let index = 0; // Index for the current word
let charIndex = 0; // Index for the current character in the word

function type() {
    if (charIndex < words[index].length) {
        typedTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newWordDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        index++;
        if (index >= words.length) {
            index = 0; // Reset index to loop through words
        }
        setTimeout(type, typingDelay + 1000); // Add delay before starting to type next word
    }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
    type();
});