//Selected-v Section
const selectButton = document.getElementsByClassName('select-btn');
for (let i = 0; i < selectButton.length; i++) {
    selectButton[i].addEventListener("click", function () {
        const playersName = document.getElementsByClassName('player-name');
        const playerIndividual = playersName[i].innerText;
        const playerList = document.getElementById('player-list');
        let newPlayer = document.createElement('li');
        newPlayer.textContent = playerIndividual;
        playerList.appendChild(newPlayer);
        selectButton[i].disabled = true;
    })
}


//Common function to get input value
function getInputValueById(value){
    const inputField = document.getElementById(value);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

//Calcute Total Cost







