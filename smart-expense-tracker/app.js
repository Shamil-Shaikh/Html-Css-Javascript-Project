let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function saveToLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function updateBalance() {
    let balance = 0;
    transactions.forEach(t => {
        if (t.type === "income") {
            balance += t.amount;
        } else {
            balance -= t.amount;
        }
    });

    document.getElementById("balance").innerText = "Rs " + balance;
}

function renderTransactions() {
    const list = document.getElementById("transaction-list");
    list.innerHTML = "";

    transactions.forEach((t, index) => {
        const li = document.createElement("li");
        li.classList.add(t.type);

        li.innerHTML = `
            ${t.description} - Rs ${t.amount}
            <button onclick="deleteTransaction(${index})">X</button>
        `;

        list.appendChild(li);
    });

    updateBalance();
}

function addTransaction() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (description === "" || isNaN(amount)) {
        alert("Please enter valid details");
        return;
    }

    transactions.push({ description, amount, type });

    saveToLocalStorage();
    renderTransactions();

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    saveToLocalStorage();
    renderTransactions();
}

renderTransactions();