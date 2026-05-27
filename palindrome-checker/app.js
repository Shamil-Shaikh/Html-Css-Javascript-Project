function checkPalindrome(){

  let text =
    document.getElementById("text")
    .value
    .toLowerCase()
    .replace(/[^a-z0-9]/g,'');

  let reversed =
    text
    .split('')
    .reverse()
    .join('');

  let result =
    document.getElementById("result");

  if(text === "") return;

  if(text === reversed){

    result.innerHTML =
      "✅ It's a Palindrome";
  }
  else{

    result.innerHTML =
      "❌ Not a Palindrome";
  }
}