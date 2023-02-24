const dropdownFunctions = {
    "none": dropdownShow,
    "initial": dropdownHide
};

function dropdownClicked(cardId){
    const card = document.getElementById(cardId);
    const attibute = card.getAttribute('style');
    const [att, display] = attibute.slice(0, -1).split(':');
    const d = display.substring(1, display.length)
    const func = dropdownFunctions[d];
    func(cardId);
}

function dropdownShow(cardId){
    const card = document.getElementById(cardId);
    card.setAttribute('style', "display: initial;");
}

function dropdownHide(cardId){
    const card = document.getElementById(cardId);
    card.setAttribute('style', "display: none;");
}

function handleChange(element) {
    const taskId = element.getAttribute('id')
    const [cardId, TID] = taskId.split('_');
    const btn = document.getElementById(`dropbtn${cardId}`);
    console.log(btn)
    element.checked ? handleCheck(btn, cardId, TID) : handleUncheck(btn, cardId, TID);
}

function handleCheck(btn, cardId, TID){
    const [qtdCompleted, qtd] = btn.innerText.split('/')
    btn.innerText = `${parseInt(qtdCompleted) + 1 }/${qtd}`
    saveStatus("completed", cardId, TID)
}

function handleUncheck(btn, cardId, TID) {
    const [qtdCompleted, qtd] = btn.innerText.split('/')
    btn.innerText = `${parseInt(qtdCompleted) - 1 }/${qtd}`
    saveStatus("incompleted", cardId, TID)
}

async function saveStatus(status, cardId, TID){
    fetch(`/handleChange/${status}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Beaurer '.concat(localStorage.getItem('token'))
        },
        body: JSON.stringify({
            "challengeId": cardId,
            "taskId": TID
        })
    })
}