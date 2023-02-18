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
    element.checked ? handleCheck(btn) : handleUncheck(btn);
}

function handleCheck(btn){
    const [qtdCompleted, qtd] = btn.innerText.split('/')
    btn.innerText = `${parseInt(qtdCompleted) + 1 }/${qtd}`
}

function handleUncheck(btn) {
    const [qtdCompleted, qtd] = btn.innerText.split('/')
    btn.innerText = `${parseInt(qtdCompleted) - 1 }/${qtd}`
}