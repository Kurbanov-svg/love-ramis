"use client";
import { useState, useEffect } from "react";
import "./lastChat.css";

export default function LastChat({ visible, onClose }) {
  const [messages, setMessages] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [showTyping, setShowTyping] = useState(false);

  const baynurMessage =
    "Последние дни как будто пустые… Хочется снова быть рядом. и делиться моментами вместе.";
  const begimayMessage = "Я тоже хочу быть рядом… Не отпускай меня.";

  useEffect(() => {
    if (!visible) return;

    setMessages([{ sender: "Рамис", text: baynurMessage }]);
    setCurrentText("");
    setShowTyping(true);

    let index = 0;
    const typingInterval = setInterval(() => {
      setCurrentText(begimayMessage.slice(0, index + 1));
      index++;
      if (index === begimayMessage.length) {
        clearInterval(typingInterval);
        setMessages((prev) => [
          ...prev,
          { sender: "Наргиз💗", text: begimayMessage },
        ]);
        setShowTyping(false);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="chat-overlay">
      {/* Крестик вынесен за пределы контейнера */}
      <button className="close-btn" onClick={onClose}>
        ✖️
      </button>

      <div className="chat-container">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${
              msg.sender === "Рамис" ? "chat-right" : "chat-left"
            }`}
          >
            <p className="person">{msg.sender}</p>
            <div className="bubble">{msg.text}</div>
          </div>
        ))}

        {showTyping && (
          <div className="chat-message chat-left">
            <p className="person">Наргиз💗..</p>
            <div className="bubble">{currentText || "…"}</div>
          </div>
        )}
      </div>
    </div>
  );
}
