import { Bot } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center gap-6 bg-[#1B1B1B] py-12 px-6 shadow-amber-50 shadow-sm">
      <Bot className="stroke-gray-50 size-12"/>
      <h1 className="font-sans text-2xl font-bold text-gray-50">Papo <span
        className="text-[#4CAF50]">Sustentável</span></h1>
    </header>
  )
}