import React, { useState } from 'react';
import './Fun.css';

const Fun = () => {
  const [cor, setCor] = useState('#548c82');

  const mudarCor = () => {
    const novaCor = '#176585'
    setCor(novaCor);
  };

  return (
    <div>
      <button className='button-30' onClick={mudarCor}>Mudar Cor</button>
      <div style={{ backgroundColor: cor }} className='style'>
        Cor Variável
      </div>
    </div>
  );
};

export default Fun;