import React from 'react';
import ImagenesNav from '../ImagenesNav/Imagenes';

const Nav = () => {
  return (
    <div className="naver">
      <ImagenesNav srcImg={pedido} txtLabel="PEDIDOS" altImg="pedido" />
      <ImagenesNav
        srcImg={ordenLista}
        txtLabel="ORDEN LISTA"
        altImg="Orden Lista"
      />
      <ImagenesNav
        srcImg={logout}
        txtLabel="CERRAR SESIÓN"
        altImg="Cerrar sesión"
      />
    </div>
  );
};

export default Nav;
