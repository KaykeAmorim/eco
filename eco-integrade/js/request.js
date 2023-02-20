function buildRequest(url, method, headers_data, data){
    const headers = getHeader(headers_data);
    return new Request(url,{method, headers, body: JSON.stringify(data)});
}

function getHeader(headers_data){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("authorization", `Beaurer ${headers_data?.token}`);
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
    };

    const request = buildRequest('/login', 'POST', undefined, data);
    const response = await sendRequest(request);
    response.token ? localStorage.setItem('token', response.token) : alert('Usuário ou senha incorretos');
    //home();
}

async function cadastro(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const data = {
        name,
        email,
        password
    };

    const request = buildRequest('/cadastro', 'POST', undefined, data);
    const response = await sendRequest(request);
    response.token ? localStorage.setItem('token', response.token) : alert('Usuário existente');
    //home();
}


function home(){
    const token = localStorage.getItem('token');
    const request = buildRequest('/home', 'GET', {token}, undefined);
    sendRequest(request);
}