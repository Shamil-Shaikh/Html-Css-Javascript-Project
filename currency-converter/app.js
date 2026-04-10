let rates = {
  USD: 1,
  PKR: 280,
  EUR: 0.9
};

function convert() {
  let amount = document.getElementById("amount").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  if (amount === "") return;

  let usdAmount = amount / rates[from];
  let result = usdAmount * rates[to];

  document.getElementById("result").innerText =
    `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}