import React from 'react'

const ImageShow = ({image}) => {
  return (
    <div className='image'>
      <img src={image.urls.small} alt="" />
    </div>
  )
}

export default ImageShow
