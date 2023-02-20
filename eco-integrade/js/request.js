function buildRequest(url, method, data){
    const headers = getHeader();
    return new Request(url,{method, headers, body: JSON.stringify(data)});
}

function getHeader(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    return myHeaders;
}

async function sendRequest(req){
    const response = await fetch(req);
    const data = await response.json();
    return data;
}

async function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = {
        email,
        password
    }
    const request = buildRequest('/login', 'POST', data);
    const response = await sendRequest(request);
    response.token ? localStorage.setItem('token', response.token) : alert('Usuário ou senha incorretos');
    location.href('/home')
}