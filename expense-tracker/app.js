let total = 0;

function addExpense() {
    let title = document.getElementById("title").value;
    let amount = document.getElementById("amount").value;

    if (title === "" || amount === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${title} <span>Rs ${amount}</span>`;

    document.getElementById("list").appendChild(li);

    total += parseInt(amount);
    document.getElementById("total").textContent = total;

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
}





