"use client";
import { useState } from "react";
import "./memory.css";

export default function Memory({ onClose }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="page">
      {/* Кнопка */}
      <button className="button-green" onClick={() => setOpen(true)}>
        Открыть воспоминание 💚
      </button>

      {/* Модальное окно */}
      {open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={onClose}>Закрыть ❌</button>
            <h2>Наши воспоминания</h2>
            <p>Здесь можно вставить фото, видео или чат 💌</p>
          </div>
        </div>
      )}
    </div>
  );
}
