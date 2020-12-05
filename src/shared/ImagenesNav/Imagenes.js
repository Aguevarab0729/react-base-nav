import React from 'react';

const ImagenesNav = (props) => {
  console.log(props);
  // srcImg
  // txtLabel
  // altImg
  return (
    <div className="pedidos">
      <img src={srcImg} className="pedido" alt={altImg} />
      <p>{props.txtLabel}</p>
    </div>
  );
};

export default ImagenesNav;
