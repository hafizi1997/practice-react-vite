import { useState } from "react";

const Animals = ({ image, size }) => {
  const [imgSize, setImgSize] = useState(size);
  return (
    <div>
      <img
        onClick={() => {setImgSize(imgSize + 20)}}
        src={image}
        alt=""
        height={`${imgSize} px`}
        width={`${imgSize} px`}
      />
    </div>
  );
};

export default Animals;
