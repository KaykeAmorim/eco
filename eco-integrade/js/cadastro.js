const btn = document.getElementById('btn');
btn.addEventListener('click', clicked);

function clicked(){
    const password = document.getElementById('password');
    const passoword_rep = document.getElementById('password_rep');
    if(password.value === passoword_rep.value){
        document.forms.cadastro.submit();
    }
    else{
        alert("Senhas diferentes!");
    }
}