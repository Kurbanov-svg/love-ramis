import Image from "next/image";

const Hero = () => {
  return (
    <div className="main">
      <Image
        src="/assets/img4.png"
        alt=""
        priority={false}
        width={475}
        height={630}
      />
    </div>
  );
};

export default Hero;
