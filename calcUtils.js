"use strict";

//Get elements by ID
let $ = (id) => {
    return document.getElementById(id);
};

// Initialize the form. Add event listeners to buttons.
let init = function(){
    $('reset').onclick = reset;
    $('submit').onclick = submit;
};

// Set the starting focus
let startingFocus = function (){
    $('startingInvestment').focus();
};

// onclick of Submit, call captureFormData()
let submit = function(){
    deleteTableRows();
    let values = captureFormData();
    $('futureInvestmentAmount').value = values[0].toFixed(2);
    $('priciple').value = values[1].toFixed(2);
    $('totalInterestEarned').value = values[2].toFixed(2);
};

// Collect form data, create a new investment object, call investment.calculator()
let captureFormData = () => {
    let startingInvestment = parseFloat($('startingInvestment').value);
    let yearsToGrow = parseFloat($('yearsToGrow').value);
    let monthlyContribution = parseFloat($('monthlyContribution').value);
    let interestRate = parseFloat($('interestRate').value) / 100;
    let newInvestment = new Investment(startingInvestment, yearsToGrow, monthlyContribution, interestRate);
    return newInvestment.calculator();
};

// Add a row to the table
let addRow = function(year, totalInvestment, priciple, interest){
    let table = $('tableData');
    let tr = document.createElement("tr");
    tr.className = "addedRow";
    let td_Year = document.createElement("td");
    td_Year.innerHTML = "Year " + year;
    let td_TotalInvestment = document.createElement("td");
    td_TotalInvestment.innerHTML = "$" + totalInvestment.toFixed(2);
    let td_Priciple = document.createElement("td");
    td_Priciple.innerHTML = "$" + priciple.toFixed(2);
    let td_Interest = document.createElement("td");
    td_Interest.innerHTML = "$" + interest.toFixed(2);
    tr.appendChild(td_Year);
    tr.appendChild(td_Priciple);
    tr.appendChild(td_Interest);
    tr.appendChild(td_TotalInvestment);
    table.appendChild(tr);
};

// onclick of Reset, return the form to the default state
let reset = function(){
    $('startingInvestment').value = '';
    $('yearsToGrow').value = '';
    $('monthlyContribution').value = '';
    $('interestRate').value = '';
    $('futureInvestmentAmount').value = '';
    $('priciple').value = '';
    $('totalInterestEarned').value = '';
    deleteTableRows();
    startingFocus();
};

// Delete rows from the table. Called from reset() & submit()
let deleteTableRows = function(){
    const elements = document.getElementsByClassName("addedRow");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
};