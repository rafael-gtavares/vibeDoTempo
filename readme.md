# 🌤️ VibeDoTempo

O **VibeDoTempo** é uma aplicação interativa de previsão do tempo que combina uma interface moderna com dados em tempo real. O projeto foi focado na construção de um código limpo, modular e com foco total na experiência do usuário (UX), utilizando design *Glassmorphism*.

> 🚀 **Confira o projeto online:** [LINK DO SEU DEPLOY AQUI]

---

## 🛠️ Tecnologias Utilizadas

### **HTML5**
* Estruturação semântica da aplicação.

### **CSS3 Avançado**
* **Variáveis CSS (Custom Properties):** Utilizadas para garantir consistência na paleta de cores e facilitar a manutenção.
* **Glassmorphism:** Efeito de transparência e desfoque (`backdrop-filter`) para um visual moderno.
* **Animações e Keyframes:** Implementação de *loaders* e transições suaves para feedback visual ao usuário.
* **Design Responsivo:** Adaptabilidade para diferentes tamanhos de tela.

### **JavaScript (ES6+)**
* **Módulos (Import/Export):** O projeto utiliza a arquitetura de módulos, permitindo uma separação clara de responsabilidades.
* **Organização de Código:** Divisão lógica entre o módulo de API e o módulo Main.
* **Consumo de APIs REST:** Uso de `Async/Await` e `Fetch API` para buscar dados climáticos da *OpenWeatherMap* e bandeiras da *FlagsAPI*.
* **Tratamento de erro:** Uso de blocos `try...catch` para garantir a resiliência da aplicação.

---

## ✨ Funcionalidades

* **Busca por Cidade:** Consulta global de dados climáticos em tempo real.
* **Identificação Visual de Países:** Integração dinâmica que exibe a bandeira do país da cidade pesquisada.
* **Sistema de Carregamento:** Feedback visual via *spinner* animado enquanto os dados são processados.
* **Tratamento de Erros:** Sistema de notificações personalizadas que alerta o usuário em caso de cidades não encontradas ou falhas de conexão.
* **Interface Inteligente:** Botão de limpeza rápida (Reset) que retorna a aplicação ao estado inicial de boas-vindas.

---

## 📂 Estrutura e Organização do Projeto

O projeto foi organizado de forma modular para garantir escalabilidade e fácil leitura:

* **Diretório Raiz:** Contém o arquivo `index.html`, o ponto de entrada da aplicação.
* **Pasta de Estilos (`/styles`):** Concentra o arquivo `style.css`, com importações de fontes, variáveis globais e todas as regras de estilização.
* **Pasta de Lógica (`/js`):** * **Módulo API (`api.js`):** Responsável exclusivamente pela comunicação externa, gerenciamento de chaves e URLs base.
    * **Módulo Principal (`main.js`):** Atua como o cérebro da interface, gerenciando a renderização de dados, eventos e o controle do *loader*.

---

## 📝 Autor

Desenvolvido com foco em aprendizado e boas práticas de Front-End por **Rafael Tavares**.

---

### 🔧 Como rodar o projeto localmente

1. Clone o repositório.
2. Certifique-se de usar um servidor local (como a extensão **Live Server** do VS Code) devido ao uso de módulos ES6.
3. Abra o arquivo `index.html`.