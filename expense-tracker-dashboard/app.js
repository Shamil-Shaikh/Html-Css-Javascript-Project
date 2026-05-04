let expenses =
  JSON.parse(localStorage.getItem("expenses")) || [];

function renderExpenses() {

  let list = document.getElementById("list");
  let total = 0;

  list.innerHTML = "";

  expenses.forEach((expense, index) => {

    total += Number(expense.amount);

    let div = document.createElement("div");

    div.className = "expense";

    div.innerHTML = `
      <h3>${expense.title}</h3>
      <p>Rs ${expense.amount} - ${expense.category}</p>
      <button onclick="deleteExpense(${index})">Delete</button>
    `;

    list.appendChild(div);
  });

  document.getElementById("total").innerText = total;

  localStorage.setItem(
    "expenses",
    JSON.stringify(expenses)
  );
}

function addExpense() {

  let title =
    document.getElementById("title").value;

  let amount =
    document.getElementById("amount").value;

  let category =
    document.getElementById("category").value;

  if (title === "" || amount === "") return;

  expenses.push({
    title,
    amount,
    category
  });

  renderExpenses();

  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
}

function deleteExpense(index) {

  expenses.splice(index, 1);

  renderExpenses();
}

renderExpenses();