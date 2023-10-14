function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === "usuario" && password === "senha") {
        document.getElementById('login-status').innerText = "Login bem-sucedido!";
    } else {
        document.getElementById('login-status').innerText = "Credenciais inválidas. Tente novamente.";
    }
    return false;
}
