import React, { useState, useEffect } from 'react';

function ContadorCurtidas() {

  const [curtidas, setCurtidas] = useState(0);

  useEffect(() => {
    if (curtidas >= 5) {
      console.log('Curtidas em alta!');
      alert('Curtidas em alta!');
    }
  }, [curtidas]);

  const incrementarCurtidas = () => {
    setCurtidas(curtidas + 1);
  };

  return (
    <div>
      <h2>Contador de Curtidas</h2>
      <p>Curtidas: {curtidas}</p>
      <button onClick={incrementarCurtidas}>Curtir</button>
    </div>
  );
}
//
export default ContadorCurtidas;
