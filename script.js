// script.js

const textDisplay = document.getElementById('text-display');
const progressBar = document.getElementById('progress-bar');
const shareButton = document.getElementById('share-button');

const messages = [
    "Accessing system files...",
    "Bypassing security protocols...",
    "Connecting to the mainframe...",
    "Retrieving data...",
    "Hacking into the network...",
    "Gathering user information...",
    "Establishing connection...",
    "Downloading files...",
    "Finalizing hack..."
];

let currentMessageIndex = 0;
let progress = 0;

function typeMessage() {
    if (currentMessageIndex < messages.length) {
        const message = messages[currentMessageIndex];
        let charIndex = 0;

        const typingInterval = setInterval(() => {
            if (charIndex < message.length) {
                textDisplay.innerHTML += message.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                currentMessageIndex++;
                setTimeout(() => {
                    textDisplay.innerHTML = '';
                    typeMessage();
                }, 1000);
            }
        }, 100);
    } else {
        displayFinalMessage();
    }
}

function updateProgressBar() {
    if (progress < 100) {
        progress += 1;
        progressBar.style.width = progress + '%';
    }
}

function displayFinalMessage() {
    setTimeout(() => {
        textDisplay.innerHTML = "HACKING COMPLETE! Your data has been compromised!";
        shareButton.style.display = 'block';
    }, 2000);
}

function sharePrank() {
    const shareText = "I just got hacked! Check this out: [link to the prank]";
    navigator.clipboard.writeText(shareText).then(() => {
        alert("Prank link copied to clipboard!");
    });
}

shareButton.addEventListener('click', sharePrank);

setInterval(updateProgressBar, 100);
typeMessage();