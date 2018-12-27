const myAccount = {
    userName: "Emmanuel",
    income: 0,
    expenses: 0,
    netIncome: 0,
    incomeSummary: function () {
        let final = this.income - this.expenses;
        document.querySelector("#net-income").innerHTML = final;
    }
}


//Add Expenses function
let addExpenses = function (account) {
    let expensesAmount = parseFloat(document.querySelector("#expenses-amount").value)

    if (isNaN(expensesAmount)) {
        alert("Please Enter a number")
    } else {
        account.expenses = account.expenses + expensesAmount;
        document.querySelector("#totalExpenses").innerHTML = account.expenses;
    }

}

//Add Income function
let addIncome = function (account) {
    let incomeAmount = parseFloat(document.querySelector("#income-amount").value)

    if (isNaN(incomeAmount)) {
        alert("Please Enter a number")
    } else {
        account.income = account.income + incomeAmount;
        document.querySelector("#totalIncome").innerHTML = account.income;
    }
}

//Event Listeners

//Add Income evetn listener
document.querySelector("#addIncome-btn").addEventListener("click", function (e) {
    e.preventDefault()
    addIncome(myAccount)
    myAccount.incomeSummary()

})


//Add expenses event listener
document.querySelector("#addExpenses").addEventListener("click", function (e) {
    e.preventDefault()
    addExpenses(myAccount)
    myAccount.incomeSummary()

})