const quotes = [

  "First, solve the problem. Then, write the code.",

  "Code is like humor. When you have to explain it, it’s bad.",

  "Programs must be written for people to read.",

  "Experience is the name everyone gives to their mistakes.",

  "Fix the cause, not the symptom."

];

function getQuote(){

  let random =
    Math.floor(
      Math.random() * quotes.length
    );

  document.getElementById("quote")
    .innerText = quotes[random];
}

function copyQuote(){

  let text =
    document.getElementById("quote")
    .innerText;

  navigator.clipboard.writeText(text);

  alert("Quote Copied!");
}

getQuote();