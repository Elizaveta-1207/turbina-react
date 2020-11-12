import React from 'react';
import styled from 'styled-components/macro';

const SongCover = styled.div`
  grid-area: cover;
  width: 100%;
  height: 176px;
  background: url(https://music-facts.ru/pictures/songs/_src/Kino/Zvezda_po_imeni_solntse.jpg) center center no-repeat;
  background-size: cover;
  border-radius: 4px;
`;

const PlayerSongCover = () => (
  <SongCover></SongCover>
);

export default PlayerSongCover;
