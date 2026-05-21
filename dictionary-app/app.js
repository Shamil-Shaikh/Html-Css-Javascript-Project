async function searchWord(){

  let word =
    document.getElementById("word").value;

  let url =
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  let response = await fetch(url);

  let data = await response.json();

  let result =
    document.getElementById("result");

  result.innerHTML = `
    <h2>${data[0].word}</h2>

    <p>
      ${data[0].meanings[0]
      .definitions[0].definition}
    </p>

    <audio id="audio"
           controls
           src="${data[0].phonetics[0].audio}">
    </audio>
  `;
}