import api from './api.js'

const main = {
    adicionarDados(dados) {
        const titulo = document.querySelector('.nome-cidade');
        titulo.innerHTML = `${dados.name}, ${dados.sys.country}`;

        const bandeira = document.querySelector('.bandeira');
        const codigoPais = dados.sys.country;
        bandeira.src = `https://flagsapi.com/${codigoPais}/flat/64.png`;
        bandeira.style.display = 'block';

        const temperatura = document.querySelector('.dados__temperatura');
        temperatura.innerHTML = `${Math.round(dados.main.temp)}ºC`;
        temperatura.style.display = 'block';

        const iconeCeu = document.querySelector('.dados__ceu img');
        iconeCeu.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;
        iconeCeu.alt = `Ícone de ${dados.weather[0].description}`;

        const situacaoCeu = document.querySelector('.dados__ceu p');
        const descricao = dados.weather[0].description;
        situacaoCeu.innerHTML = descricao.charAt(0).toUpperCase() + descricao.slice(1);

        const chuva = document.querySelector('.probabilidade-chuva');
        chuva.innerHTML = `${dados.main.humidity}%`;

        const vento = document.querySelector('.velocidade-vento');
        vento.innerHTML = `${Math.round(dados.wind.speed)} km/h`;
    },

    resetarTela() {
        const titulo = document.querySelector('.nome-cidade');
        titulo.innerHTML = 'Bem vindo ao VibeDoTempo';

        const bandeira = document.querySelector('.bandeira');
        bandeira.style.display = 'none';

        const temperatura = document.querySelector('.dados__temperatura');
        temperatura.style.display = 'none';

        const iconeCeu = document.querySelector('.dados__ceu img');
        iconeCeu.src = 'https://img.icons8.com/ios-filled/100/000000/marker.png';
        iconeCeu.alt = 'Localização';

        const situacaoCeu = document.querySelector('.dados__ceu p');
        situacaoCeu.innerHTML = 'Digite uma cidade para começar';

        const chuva = document.querySelector('.probabilidade-chuva');
        chuva.innerHTML = '%';

        const vento = document.querySelector('.velocidade-vento');
        vento.innerHTML = 'km/h';

        const btnLimpar = document.querySelector('.botao-limpar');
        btnLimpar.style.display = 'none';
    },

    async renderizarDados() {
        const btnLimpar = document.querySelector('.botao-limpar');
        btnLimpar.addEventListener('click', () => {
            this.resetarTela();
        })

        const form = document.querySelector('.busca');
        form.addEventListener('submit', async (evento) => {
            evento.preventDefault();

            const cidade = document.querySelector('.input-cidade').value;

            const containerDados = document.querySelector('.dados');
            containerDados.style.display = 'none';

            const animacaoCarregando = document.querySelector('.animacao-carregando');
            animacaoCarregando.style.display = 'flex';

            const dados = await api.buscarDados(cidade);

            animacaoCarregando.style.display = 'none';
            containerDados.style.display = 'block'

            if (dados) {
                this.adicionarDados(dados);
                btnLimpar.style = 'flex';
            }

            form.reset();
            document.activeElement.blur(); //Para tirar o foco do input

        })

    },

    exibirNotificacao(mensagem) {
        const container = document.querySelector('#container-notificacoes');
        const elemento = document.createElement('div');
        
        elemento.classList.add('notificacao');
        elemento.textContent = mensagem;
        
        container.appendChild(elemento);

        setTimeout(() => {
            elemento.classList.add('fade-out');
            
            setTimeout(() => {
                elemento.remove();
            }, 1000); 
        }, 2000);
    },
}

main.renderizarDados();

export default main
