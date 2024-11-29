// Gerenciar o sistema de avaliação por estrelas
document.querySelectorAll('.estrela').forEach(estrela => {
    estrela.addEventListener('click', () => {
        const valor = estrela.getAttribute('data-valor'); // Obtém o valor da estrela clicada

        // Remove a seleção de todas as estrelas
        document.querySelectorAll('.estrela').forEach(estrela => {
            estrela.classList.remove('selecionada');
        });

        // Marca as estrelas até o valor selecionado
        for (let i = 0; i < valor; i++) {
            document.querySelectorAll('.estrela')[i].classList.add('selecionada');
        }

        console.log('Avaliação em estrelas:', valor); // Exibe no console (pode ser armazenado ou enviado)
    });
});

// Capturar o comentário e enviar
document.getElementById('enviarComentario').addEventListener('click', () => {
    const comentario = document.getElementById('comentarios').value.trim(); // Pega o comentário
    const avaliacao = document.querySelectorAll('.estrela.selecionada').length; // Pega o número de estrelas selecionadas

    if (!comentario) {
        alert('Por favor, insira um comentário!');
        return;
    }

    console.log('Comentário enviado:', comentario);
    console.log('Avaliação enviada:', avaliacao);

    // Limpar campos após o envio
    document.getElementById('comentarios').value = '';
    alert('Sua avaliação foi enviada para análize com sucesso!');
});