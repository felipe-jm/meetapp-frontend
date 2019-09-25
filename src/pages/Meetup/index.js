import React from 'react';

import { Container } from './styles';

export default function Meetup() {
  return (
    <Container>
      <div>
        <h1>Titulo do Meetup</h1>
        <div>
          <button type="button">Editar</button>
          <button type="button">Cancelar</button>
        </div>
        <img src="https://rocketseat.com.br/static/og.png" alt="Meetup" />
        <p>
          Descricao do meetu
          ahsefuhasuefashefushefuahsefuhasufhasuhfuashefuhasuefahseufhasufhasuhefasuehfasuehfp
        </p>
        <div>
          <span>Data</span>
          <span>Localização</span>
        </div>
      </div>
    </Container>
  );
}
