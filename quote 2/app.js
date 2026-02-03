const quotes = [
    "Success is not final, failure is not fatal.",
    "Believe in yourself.",
    "Dream big and dare to fail.",
    "Hard work beats talent when talent doesn't work hard.",
    "Consistency is the key to success."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}



