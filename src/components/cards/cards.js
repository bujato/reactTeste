import React, { useState } from 'react';
import './cards.css';

function Card ({url, nome, profissao, sobre}) {
    const [cor, setCor] = useState('#548c82');
    const mudarCor = () => {
        const corNova = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setCor(corNova);
    };

    return (
        <div className="container" 
        style={{ backgroundColor: cor }}>
            <img src={url} />
            <h1 className="nome">Nome: {nome}</h1>
            <h3 className="profissao">Profissão: {profissao}</h3>
            <p className="sobre">{sobre}</p>
            <button className='button-30' onClick={mudarCor}>Mudar Cor</button>
        </div> 
    )
}

export default Card