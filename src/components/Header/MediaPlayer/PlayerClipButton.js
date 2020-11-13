import styled from 'styled-components/macro';
import RoundedButton from '../../CommonUtils/Templates/RoundedButton';

const PlayerClipButton = styled(RoundedButton)`
  grid-area: clip;
  width: 94px;
  height: 35px;
  padding: 0 10px;
  font-weight: 500;
  font-size: 16px;
  border: none;
  background: #fff;
  justify-self: end;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 20px;
  }
  @media screen and (max-width: 424px) {
    font-size: 12px;
    height: 31px;
  }
`;

export default PlayerClipButton;
