// Função de validação do login
function validateLogin() {
    // Obtenha os valores do formulário
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verifique se as credenciais são válidas
    // Exemplo simples de validação (substitua por sua própria lógica de verificação)
    if (username === 'usuario' && password === 'senha') {
        // Redireciona para a página index.html
        window.location.href = 'index.html';
    } else {
        // Se os dados estiverem incorretos, exibe uma mensagem de erro
        document.getElementById('error-message').innerText = 'Usuário ou senha incorretos!';
    }
}

// Adiciona o evento de clique no botão de login
document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    validateLogin(); // Chama a função de validação
});