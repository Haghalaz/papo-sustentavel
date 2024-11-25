import ReactMarkdown from "react-markdown";

export default function Message({className, role, text}: {className?: string, role: "user" | "bot", text: string}) {
return(
  <div className={`animate-fadeUP ${className}`}
    style={{textAlign: role === "user" ? "right" : "left",
    }}
  >
    <div
      className="inline-block p-3 rounded-lg max-w-[80%]"
      style={{
        backgroundColor: role === "user" ? "#1A6403" : "#e0e0e0",
        color: role === "user" ? "white" : "black",
      }}
    >

      {role === "bot" ? ( <ReactMarkdown>{ text }</ReactMarkdown> ) : ( <p>{ text }</p> )}
    </div>
  </div>
)
}