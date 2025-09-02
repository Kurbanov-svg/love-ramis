"use client";
import { useState, useEffect } from "react";
import "./lastChat.css";

export default function LastChat({ visible, onClose }) {
  const [messages, setMessages] = useState([]);
  const [currentText, setCurrentText] = useState(""); // текст, который печатается
  const [showTyping, setShowTyping] = useState(false);

  const baynurMessage =
    "Последние дни как будто пустые… Хочется снова быть рядом. и делиться моментами вместе.";
  const begimayMessage = "Я тоже хочу быть рядом… Не отпускай меня.";

  useEffect(() => {
    if (!visible) return;

    // Сразу сообщение Байнура
    setMessages([{ sender: "Байнур", text: baynurMessage }]);
    setCurrentText("");
    setShowTyping(true);

    // Начинаем печатать сообщение Бегимай по буквам
    let index = 0;
    const typingInterval = setInterval(() => {
      setCurrentText(begimayMessage.slice(0, index + 1));
      index++;
      if (index === begimayMessage.length) {
        clearInterval(typingInterval);
        setMessages((prev) => [
          ...prev,
          { sender: "Бегимай💗", text: begimayMessage },
        ]);
        setShowTyping(false);
      }
    }, 100); // скорость печати в мс

    return () => clearInterval(typingInterval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="chat-overlay">
      <div className="chat-container">
        <button className="close-btn" onClick={onClose}>
          ✖️
        </button>

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${
              msg.sender === "Байнур" ? "chat-right" : "chat-left"
            }`}
          >
            <p className="person">{msg.sender}</p>
            <div className="bubble">{msg.text}</div>
          </div>
        ))}

        {showTyping && (
          <div className="chat-message chat-left">
            <p className="person">Бегимай💗..</p>
            <div className="bubble">{currentText || "…"}</div>
          </div>
        )}
      </div>
    </div>
  );
}
