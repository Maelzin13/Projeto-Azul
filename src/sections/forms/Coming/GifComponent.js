// GifComponent.js
import React from 'react';
import { gifImage } from '/public/assets/images/coming_soon_Azul.png'; // Ajuste o caminho conforme necessário

const GifComponent = () => {
  return <img src={gifImage} alt="GIF" style={{ width: '100%', marginBottom: '10px' }} />;
};

export default GifComponent;
