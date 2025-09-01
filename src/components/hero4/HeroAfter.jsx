import Image from "next/image";
import React from "react";

const HeroAfter = () => {
  return (
    <div className="main">
      <Image
        src="/assets/heroAfter.png"
        alt="love me"
        width={475}
        height={630}
      />
    </div>
  );
};

export default HeroAfter;
