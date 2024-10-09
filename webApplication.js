const expenseForm = document.getElementById('form');
const expenseNameInput = document.getElementById('expense-inputname');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseCategoryInput = document.getElementById('category');
const expenseSummaryList = document.getElementById('summary-list');
const totalAmount = document.getElementById('total-amount');

let totalExpenses = 0;

expenseForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const expenseName = expenseNameInput.value;
    const expenseAmount = expenseAmountInput.value;
    const expenseCategory = expenseCategoryInput.value;

    const listItem = document.createElement('li');
    listItem.textContent = `${expenseName}: $${expenseAmount}  - ${expenseCategory}` 
    expenseSummaryList.appendChild(listItem);

    if (expenseAmount <= 0){
        alert("Please enter a valid amount.");
        return;
    }

    totalExpenses += expenseAmount;
    totalAmountDisplay.textContent = totalExpenses

    expenseNameInput.value = '';
    expenseAmountInput.value = '';
    expenseCategoryInput.value = '';
    

})