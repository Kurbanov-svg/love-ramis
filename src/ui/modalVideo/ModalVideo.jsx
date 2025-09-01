"use client";
import "./modalVideo.css";

export default function ModalVideo({ visible, onClose, src }) {
  if (!visible) return null; // если не видно, ничего не рендерим

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖️
        </button>
        <video src={src} controls autoPlay className="video-player" />
      </div>
    </div>
  );
}
