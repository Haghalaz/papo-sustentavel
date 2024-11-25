# Chatbot Sustentável 🌱

Um chatbot simples e responsivo desenvolvido com React e Vite, projetado para fornecer informações úteis sobre saúde, bem-estar e sustentabilidade, alinhado aos Objetivos de Desenvolvimento Sustentável (ODS) nº 3 e nº 11.

## Funcionalidades

- **Dicas de saúde e bem-estar**: Respostas diretas e práticas para melhorar a qualidade de vida.
- **Economia sustentável**: Estratégias para reduzir o consumo de água e energia.
- **Descarte correto de resíduos**: Informações sobre como descartar medicamentos, materiais recicláveis e outros resíduos corretamente.
- **Interface no estilo de chat**: Experiência de usuário fluida e moderna, com rolagem automática.

## Tecnologias Utilizadas

- **React**: Para a criação da interface do usuário.
- **Vite**: Para inicialização rápida do projeto e otimização de desenvolvimento.
- **TypeScript**: Para tipagem estática e maior segurança no código.
- **Google Generative AI (Gemini)**: Para processamento e geração de respostas inteligentes.

## Instalação e Execução

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/seu-usuario/chatbot-sustentavel.git
   cd chatbot-sustentavel
   
2. Instale as dependências:
    ```bash
    npm install
   
3. Configure a API do Gemini:

- Crie um arquivo .env na raiz do diretorio.
- Adicione sua chave de API do Gemini:
    ```makefile
    VITE_GEMINI_API_KEY=sua_chave_de_api
  
4. Inicie o projeto:
    ```bash
    npm run dev

5. Acesse o projeto:
 - Abra http://localhost:5173 no seu navegador.

## Como Funciona
### Envio de Mensagens:

O usuário pode enviar mensagens pressionando o botão ou a tecla Enter.
O chatbot responde com base no modelo configurado, retornando apenas informações relacionadas ao tema do projeto.

Responde apenas perguntas relacionadas ao projeto. Caso o usuário pergunte algo fora do escopo, o chatbot informa que não pode responder.

#### Exemplos de Perguntas
 - "Como economizar água no dia a dia?"
 - "Quais são as melhores práticas de reciclagem?"
 - "Como reduzir o consumo de energia em casa?"


## Licença
Este projeto está licenciado sob a MIT License.
