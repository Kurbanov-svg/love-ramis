import Image from "next/image";

const Hero = () => {
  return (
    <div className="main">
      <Image
        src="/assets/hero.png"
        alt=""
        priority={true}
        width={475}
        height={630}
      />
    </div>
  );
};

export default Hero;
