"use client";
import { useState } from "react";
import ModalVideo from "../../ui/modalVideo/ModalVideo";

export default function MemoriesButton() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div>
      <div className="mainbek">
        <button className="btn" onClick={openModal}>
          Воспоминание 🎬
        </button>
      </div>

      <ModalVideo
        visible={modalVisible}
        onClose={closeModal}
        src="https://drive.google.com/file/d/1OOvRFYHoqzLmBy49ti9IJWNTJhedK-u5/preview"
      />
    </div>
  );
}
