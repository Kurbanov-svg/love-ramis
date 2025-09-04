import Image from "next/image";

const Four = () => {
  return (
    <div className="main">
      <Image
        src="/assets/img2.png"
        alt="Воспоминание"
        width={480}
        height={600}
        style={{ width: "100%", height: "auto" }}
        priority
        className="memory-photo"
      />
    </div>
  );
};

export default Four;
