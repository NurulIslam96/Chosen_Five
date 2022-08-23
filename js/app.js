// Selected-v Section
const selectButton = document.getElementsByClassName('select-btn');
for (let i = 0; i < selectButton.length; i++) {
    selectButton[i].addEventListener("click", function () {
        const playersName = document.getElementsByClassName('player-name');
        const playerIndividual = playersName[i].innerText;
        const playerList = document.getElementById('player-list');
        if (playerList.childNodes.length < 5) {
            const newPlayer = document.createElement('li');
            newPlayer.textContent = playerIndividual;
            newPlayer.style.margin = '20px';
            playerList.appendChild(newPlayer);
            selectButton[i].disabled = true;
        }else{
            alert('You can not select beyond 5 players');
        }
    })
}

//function to get input value
function getInputValueById(value) {
    const inputField = document.getElementById(value);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

function calculateExpense() {
    const perPlayerCost = getInputValueById('player-cost');
    const playerList = document.getElementById('player-list');
    const totalExpense = perPlayerCost * playerList.childNodes.length;
    return totalExpense;
}
function calculateTotal() {
    const managerCost = parseFloat(getInputValueById('manager-cost'));
    const coachCost = parseFloat(getInputValueById('coach-cost'));
    const totalCost = calculateExpense() + managerCost + coachCost;
    return totalCost;
}

//calculate Expense Button
document.getElementById('calculate-btn').addEventListener('click', function () {
    const previousExpense = document.getElementById('previous-expense');
    const perPlayerCostField = getInputValueById('player-cost');
    const playerList = document.getElementById('player-list');
    if(playerList.childNodes.length === 0){
        alert('Please Select atleast One Player');
    }else if (perPlayerCostField === '' || perPlayerCostField < 0){
        alert('Please Enter a Valid Amount');
    }
    previousExpense.innerText = calculateExpense();  
    if(previousExpense.innerText === 'NaN'){
        alert('Please Enter a Valid Amount')
        previousExpense.innerText = '00';
    }
})
//Calculate Total Button
document.getElementById('total-button').addEventListener('click', function () {
    const previousTotalCost = document.getElementById('total-expense');
    const managerCostField = getInputValueById('manager-cost');
    const coachCostField = getInputValueById('coach-cost');
    if(managerCostField === '' || coachCostField === '' || managerCostField < 0 || coachCostField < 0){
        alert('Please Enter a Valid Amount');
        previousTotalCost.innerText = '00';
        return;
    }
    previousTotalCost.innerText = calculateTotal();
    if(previousTotalCost.innerText === 'NaN'){
        alert('Please Enter a Valid Amount')
        previousTotalCost.innerText = '00';
    }
})
