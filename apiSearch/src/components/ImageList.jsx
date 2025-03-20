import React from "react";

import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return (
      <div key={image.id} className="image-list">
      <ImageShow image={image} />
    </div>
    )
  });
  return <div>{renderedImages}</div>;
};

export default ImageList;
