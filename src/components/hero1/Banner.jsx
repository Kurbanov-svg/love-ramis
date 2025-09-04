import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner-container">
      <Image
        src="/assets/img1.png"
        alt="Воспоминание"
        width={480}
        height={600}
        style={{ width: "100%", height: "auto" }}
        priority
        className="memory-photo"
      />

      <style jsx>{`
        .banner-container {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .memory-photo {
          border-radius: 1rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          animation: fadeIn 0.6s ease;
          transition: transform 0.3s ease;
        }

        .memory-photo:hover {
          transform: scale(1.05);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
