const noteText = document.getElementById('note-text');
const startBtn = document.getElementById('start-btn');

// Initialize speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Set properties
recognition.continuous = true; // Keeps listening
recognition.lang = 'en-US';    // Sets language

startBtn.addEventListener('click', () => {
    recognition.start();
});

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    noteText.value += transcript; // Appends voice text to note
};
