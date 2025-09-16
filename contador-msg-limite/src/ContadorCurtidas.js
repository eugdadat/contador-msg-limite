import React, { useState, useEffect } from 'react';

function ContadorCurtidas() {
  // Criando o estado para o contador de curtidas
  const [curtidas, setCurtidas] = useState(0);

  // Usando useEffect para verificar o número de curtidas e exibir mensagem
  useEffect(() => {
    if (curtidas >= 5) {
      console.log('Curtidas em alta!');
      alert('Curtidas em alta!');
    }
  }, [curtidas]); // Dependência do useEffect, vai rodar quando "curtidas" mudar

  // Função para incrementar o contador
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

export default ContadorCurtidas;
