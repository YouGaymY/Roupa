const form = document.getElementById('address-form');
const confirmationContainer = document.getElementById('confirmation-container');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    const address = document.getElementById('address').value;
    const zip = document.getElementById('zip').value;
    const state = document.getElementById('state').value;

    // Verifica se todos os campos foram preenchidos
    if (!name || !product || !address || !zip || !state) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Exibe as informações preenchidas e o botão "Confirmar Endereço"
    form.style.display = 'none';
    confirmationContainer.innerHTML = `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Produto:</strong> ${product}</p>
        <p><strong>Endereço:</strong> ${address}</p>
        <p><strong>CEP:</strong> ${zip}</p>
        <p><strong>Estado:</strong> ${state}</p>
        <button id="confirm-button">Confirmar Endereço</button>
    `;
    confirmationContainer.style.display = 'block';

    // Adiciona evento ao botão "Confirmar Endereço"
    document.getElementById('confirm-button').addEventListener('click', () => {
        confirmationContainer.innerHTML = `
            <p class="success-message">Endereço cadastrado com sucesso!</p>
            <img src="https://i.ibb.co/V2TRRSW/b557dbb0d6bc566a1677165c2b0d9233-removebg-preview.png" alt="Sucesso" style="width: 50px; margin-top: 10px;">
        `;

        // Redireciona para index.html após 2 segundos
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });
});