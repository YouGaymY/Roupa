const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

// Função para quando o cliente clicar na pergunta frequente
function askQuestion(question, answer) {
    appendMessage(question, 'user');
    appendMessage('Digitando...', 'bot'); // Animação "Digitando..."

    // Simula o tempo para a resposta do bot
    setTimeout(() => {
        removeTyping();
        appendMessage(answer, 'bot');
    }, 3000);
}

// Função para adicionar uma mensagem ao chat
function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${sender}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Rola para a última mensagem
}

// Remove mensagens de "Digitando..." ou "Aguarde a resposta..."
function removeTyping() {
    const typingMessages = document.querySelectorAll('.chat-message.bot, .chat-message.waiting');
    typingMessages.forEach(msg => {
        if (msg.textContent === 'Digitando...' || msg.textContent === 'Aguarde a resposta...') {
            msg.remove();
        }
    });
}

// Evento para quando o cliente enviar uma mensagem
sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();

    if (userMessage === '') return; // Impede o envio de mensagens vazias

    appendMessage(userMessage, 'user'); // Exibe a mensagem do usuário
    chatInput.value = ''; // Limpa o campo de entrada

    // Exibe a mensagem "Aguarde a resposta..."
    appendMessage('Aguarde a resposta...', 'waiting');

    // Simula o tempo de resposta do bot
    setTimeout(() => {
        removeTyping(); // Remove a mensagem de "Aguarde a resposta..."
        appendMessage('aguarde a resposta do suporte, ou veja se algumas das opcões acima e sobre o seu problema', 'bot'); // Resposta padrão do bot
    }, 3000);
});