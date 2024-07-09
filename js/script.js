
const texts = ["a CS Under Graduate", "an AI/ML Enthusiast", "a Learner"];
let count = 0;

function typeWriter() {
    const span = document.getElementById('dynamic-text');
    const currentText = texts[count];
    const interval =250;
    let timer = setInterval(function() {
        if (span.innerHTML.length > 0) {
            span.innerHTML = span.innerHTML.slice(0, -1); // Remove last letter
        } else {
            clearInterval(timer); // Stop removing letters
            let nextText = texts[(count + 1) % texts.length]; // Get next text in array
            typeNextText(nextText); // Call function to type next text
        }
    }, interval);
}

function typeNextText(text) {
    const span = document.getElementById('dynamic-text');
    const interval = 200; // Interval between each letter typing
    let i = 0;

    // Start typing new text letter by letter
    let timer = setInterval(function() {
        if (i < text.length) {
            span.innerHTML += text.charAt(i); // Add next letter
            i++;
        } else {
            clearInterval(timer); // Stop typing letters
            count = (count + 1) % texts.length; // Update index for next text
            setTimeout(typeWriter, 5000); // Wait before starting next iteration
        }
    }, interval);
}

// Start the typing animation
typeWriter();

