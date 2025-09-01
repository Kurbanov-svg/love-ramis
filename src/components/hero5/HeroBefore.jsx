import Image from "next/image";
import React from "react";

const HeroBefore = () => {
  return (
    <div className="main">
      <Image
        src="/assets/herobefore.png"
        alt="love me"
        width={475}
        height={630}
        priority={true}
      />
    </div>
  );
};

export default HeroBefore;
