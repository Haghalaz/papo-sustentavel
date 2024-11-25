import { KeyboardEvent } from "react";
import { Loader } from "lucide-react";

interface SendMessageProps {
  input: string
  setInput: (input: string) => void
  loading: boolean
  onSend: () => Promise<void>;
}

export default function SendMessage({input, setInput, loading, onSend}: SendMessageProps) {
  const handleKeyPress = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (!loading && event.key === "Enter") {
      await onSend();
    }
  };

  return (
    <div className="flex items-center gap-6 bg-[#1B1B1B] py-12 px-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Digite sua pergunta..."
        className="bg-transparent text-gray-50 w-full rounded-lg py-4 px-6"
      />

      <button className="bg-[#4CAF50] rounded-lg py-4 px-6 font-bold text-gray-50" onClick={onSend}>
        {loading ? <Loader className="animate-spin"/> : "Enviar"}
      </button>
    </div>
  )
}