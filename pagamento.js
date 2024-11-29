// Recupera as informações do produto na página de pagamento
const produtoNome = sessionStorage.getItem("produtoNome");
const produtoValor = sessionStorage.getItem("produtoValor");

const nomeProdutoPagamento = document.getElementById("nomeProduto");
const valorProdutoPagamento = document.getElementById("valorProduto");

// Exibe o nome e o valor do produto
if (nomeProdutoPagamento && valorProdutoPagamento) {
    nomeProdutoPagamento.textContent = `Produto: ${produtoNome}`;
    valorProdutoPagamento.textContent = `Valor: R$ ${produtoValor}`;
}
// Função para copiar a chave PIX e iniciar a contagem regressiva
function copiarChave() {
    const chavePix = document.getElementById("pixKey");
    
    // Copiar o conteúdo da chave PIX para a área de transferência
    chavePix.select();
    document.execCommand("copy");

    // Iniciar contagem regressiva de 1 hora e 40 minutos (100 minutos) em segundos
    iniciarContagemRegressiva(100 * 60); // 100 minutos em segundos
}

// Função para iniciar a contagem regressiva
function iniciarContagemRegressiva(segundos) {
    const displayContagem = document.getElementById("contagemRegressiva");
    displayContagem.style.display = 'block'; // Exibe a contagem regressiva
    let tempoRestante = segundos;

    // Função para formatar o tempo (horas:minutos:segundos)
    function formatarTempo(tempo) {
        const horas = Math.floor(tempo / 3600); // Calcular as horas
        const minutos = Math.floor((tempo % 3600) / 60); // Calcular os minutos
        const segundos = tempo % 60; // Calcular os segundos

        return `${horas} hora(s), ${minutos} minuto(s) e ${segundos} segundo(s)`;
    }

    // Atualizar a contagem regressiva a cada segundo
    const intervalo = setInterval(() => {
        if (tempoRestante <= 0) {
            clearInterval(intervalo);
            displayContagem.textContent = "Tempo esgotado!";
        } else {
            displayContagem.textContent = formatarTempo(tempoRestante);
            tempoRestante--;
        }
    }, 1000);
}