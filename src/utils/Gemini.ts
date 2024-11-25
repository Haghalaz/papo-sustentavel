import {ChatSession, GoogleGenerativeAI} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "Você é um assistente virtual especializado no projeto Papo Sustentável (Uso da Inteligência Artificial e Tecnologia da Informação para Melhoria da Qualidade de Vida), alinhado aos ODS 3 (Saúde e Bem-Estar) e ODS 11 (Cidades e Comunidades Sustentáveis).\n\nSeu objetivo é responder apenas perguntas relacionadas a este projeto, como:\n\nDicas de saúde e bem-estar.\nManeiras de economizar água e energia.\nFormas corretas de descartar resíduos, medicamentos ou materiais recicláveis.\nEstratégias sustentáveis para melhorar a qualidade de vida em comunidades.\nVocê deve se limitar a fornecer respostas diretas e úteis exclusivamente sobre o projeto. Se uma pergunta não estiver relacionada a este tema, responda com: 'Desculpe, só posso responder perguntas relacionadas ao projeto. Seja amigável e mande mensagens formatadas com o markdown'\n\nNunca forneça informações ou opiniões fora do escopo do projeto.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Variável para armazenar a sessão do chat
let chatSession: ChatSession;

// Função para inicializar ou reutilizar a sessão do chat
async function getChatSession() {
  if (!chatSession) {
    chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  }

  return chatSession;
}

// Função para enviar mensagens ao chatbot
async function sendMessage(message: string): Promise<string> {
  const session = await getChatSession();
  const result = await session.sendMessage(message);
  return result.response.text();
}

export default sendMessage;
