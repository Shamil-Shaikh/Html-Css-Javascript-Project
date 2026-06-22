let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let chart;

function addExpense() {
  const name = document.getElementById("name").value;
  const amount = Number(document.getElementById("amount").value);
  const category = document.getElementById("category").value;

  if (!name || !amount) return alert("Enter data!");

  expenses.push({ name, amount, category });
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
  render();
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  let total = 0;
  let categoryTotals = {};

  expenses.forEach(exp => {
    total += exp.amount;

    categoryTotals[exp.category] =
      (categoryTotals[exp.category] || 0) + exp.amount;

    const li = document.createElement("li");
    li.innerText = `${exp.name} - Rs ${exp.amount} (${exp.category})`;
    list.appendChild(li);
  });

  document.getElementById("total").innerText = total;

  drawChart(categoryTotals);
}

function drawChart(data) {
  const ctx = document.getElementById("chart");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(data),
      datasets: [{
        data: Object.values(data)
      }]
    }
  });
}

render();