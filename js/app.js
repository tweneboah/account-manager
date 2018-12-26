const myAccount = {
    userName: "Emmanuel",
    income: 0,
    expenses: 0
}




let addExpenses = function (account) {
    let expensesAmount = parseFloat(document.querySelector("#expenses-amount").value)
    account.expenses = account.expenses + expensesAmount;

    account.expenses = account.expenses + expensesAmount;
    document.querySelector("#totalExpenses").innerHTML = account.expenses;

}


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

document.querySelector("#addIncome-btn").addEventListener("click", function (e) {
    e.preventDefault()
    addIncome(myAccount)
})




document.querySelector("#addExpenses").addEventListener("click", function (e) {
    e.preventDefault()
    addExpenses(myAccount)

})