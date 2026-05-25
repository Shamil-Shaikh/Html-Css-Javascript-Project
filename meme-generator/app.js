async function getMeme(){

  let response =
    await fetch(
      "https://meme-api.com/gimme"
    );

  let data =
    await response.json();

  document.getElementById("meme")
    .src = data.url;
}

getMeme();