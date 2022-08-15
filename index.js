var cardName = document.getElementById("name");

function validName(){
    if (cardName.value == ''){
        cardName.style.borderColor = 'red';
    } 
}

cardName.addEventListener('submit',validName());
