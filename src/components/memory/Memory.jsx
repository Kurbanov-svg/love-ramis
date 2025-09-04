import { useState, useEffect } from "react";
import "./memory.css";

export default function Memory({ onClose }) {
  const [open, setOpen] = useState(false);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const size = Math.random() * 20 + 10;
      const left = Math.random() * window.innerWidth;
      setHearts((prev) => [...prev, { id: Date.now(), left, size }]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{ left: heart.left, width: heart.size, height: heart.size }}
        ></div>
      ))}

      <button className="button-green" onClick={() => setOpen(true)}>
        Открыть воспоминание 🎉
      </button>

      {open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={onClose}>
              ❌
            </button>

            <h2>С Днём Рождения!</h2>
            <p>Счастья, любви и улыбок сегодня и всегда!</p>
          </div>
        </div>
      )}
    </div>
  );
}
