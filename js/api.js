import main from './main.js'

const api = {
    key: "154e59279d7aa496c8ccca24d907c924",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",

    async buscarDados(cidade) {
        const cidadeLimpo = encodeURIComponent(cidade.trim());

        try {
            const url = `${this.baseUrl}?q=${cidadeLimpo}&appid=${this.key}&units=metric&lang=pt_br`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Cidade não encontrada')
            };

            console.log('Dados buscados com sucesso')
            const dados = await response.json();

            console.log(dados)
            return dados
        } catch (error) {
            if (error.message === 'Cidade não encontrada') {
                main.exibirNotificacao('❌ A cidade digitada não foi encontrada, verifique a ortografia.')
            } else {
                main.exibirNotificacao('❌ Erro de conexão com o servidor');
            }
            console.log('Erro detalhado: ', error)
            return null
        }
    }
}

export default api