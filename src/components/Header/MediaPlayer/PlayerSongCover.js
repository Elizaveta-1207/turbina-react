import styled from 'styled-components/macro';
import defaultCover from '../../../images/defaultCover.jpg';

const PlayerSongCover = styled.div`
  grid-area: cover;
  width: 100%;
  background: ${(props) => (props.cover || `url(${defaultCover})`)
};
  background-size: cover;
  background-position: center; 
  padding-bottom: 100%;
  border-radius: 4px;
`;

export default PlayerSongCover;
