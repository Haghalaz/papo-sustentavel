import React, {useEffect, useRef, useState} from "react";
import sendMessage from "../../utils/Gemini.ts";

import Message from "../atoms/message.tsx";
import Header from "../atoms/header.tsx";
import SendMessage from "../molecules/send-message.tsx";

const ChatInterface: React.FC = () => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);
  const [isloadingMessage, setIsloadingMessage] = useState(false)
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setIsloadingMessage(true)
    setInput("");

    try {
      const botResponse = await sendMessage(input);
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", text: "Ocorreu um erro. Recarregue a página ou tente novamente mais tarde." }]);
      console.error(error);
    } finally {
      setIsloadingMessage(false)
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <main className="bg-[#3C3C3C] h-screen flex justify-between flex-col">
      <Header />

      <div className="space-y-12 px-12 py-6 grow overflow-y-auto md:px-24">
        {messages.map(({text, role}, index) => (
          <Message key={index} text={text} role={role}/>
        ))}

        {isloadingMessage && (
          <Message className="animate-pulse" text={"Digitando..."} role={"bot"}/>
        )}

        <span ref={messagesEndRef}/>
      </div>

      <SendMessage input={input} setInput={setInput} loading={isloadingMessage} onSend={handleSend}/>
    </main>
  );
};

export default ChatInterface;
