import React from 'react';

const ImageDisplay = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} style={{ maxWidth: '50%'  }} />
    </div>
  );
};

export default ImageDisplay;