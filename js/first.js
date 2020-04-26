
//get the heading elemet
const headingEl = document.querySelector("#headingTotal");

//get the refrence to desc element
const inputDescEl = document.querySelector("#inputDesc");

//ref to inputAmount    
const inputElement = document.querySelector("#inputAmount");

// get the ref to table
const expenseTableEl = document.querySelector("#expenseTable");

// init value of expense at 0
let totalExpense = 0;

//set the heading element to totalExpense
headingEl.textContent = totalExpense;

// All expenses at one place
const allExpenses = [];

// onButtonClick add inputAmount to totalExpense
function addExpensetoTotal() {
    const expenseItem = {};

    //read value from inputAmount
    const textAmount = inputElement.value;

    // read the desc from inputDesc
    const textDesc = inputDescEl.value;


    // convert it to number
    const expense = parseInt(textAmount, 10);

    // put it in object
    expenseItem.desc = textDesc;
    expenseItem.amount = expense;
    expenseItem.moment = new Date();

    // add the data of the object into the array
    allExpenses.push(expenseItem);

    //add that value to totalExpense
    totalExpense = totalExpense + expense;

    //set the heading element to totalExpense
    const someText = `Total Expense: ${totalExpense}`;
    headingEl.textContent = someText;

    const allExpenseHTML =  allExpenses.map(expense => createListItem(expense));

    const joinedAllExpenseHTML = allExpenseHTML.join("");

    console.log(joinedAllExpenseHTML);

    expenseTableEl.innerHTML = joinedAllExpenseHTML;
}

// Get the button element
const element = document.querySelector("#btnAddExpense"); //HW:Read about queryselector onm mzilla.org. Search for queryselector mdn

// listen to click event
element.addEventListener("click", addExpensetoTotal, false);


// Controller Functions
function getDateString(moments) {
    moments.toLocaleDateString('en-US', {
        year : 'numeric',
        month : 'long',
        day : 'numeric'
    })
}

// View Layer
function createListItem({ desc, amount, moment }) {
    return `
    <li class="list-group-item d-flex justify-content-between">
    <div class="d-flex flex-column">
        ${desc}
        <small class="text-muted">${getDateString(moment)}</small>
    </div>
    <div>
        <span class="px-5">
            ${amount}
        </span>
        <button type="button" class="btn btn-outline-danger btn-sm">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
</li>
    `
}