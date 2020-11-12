import styled from 'styled-components/macro';

const Player = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  padding: 0 25px;
  box-sizing: border-box;
  z-index: 2;
  transition: max-height 1s ease-in-out;
  color: ${(props) => props.color};
  max-height: ${(props) => (props.isExpanded ? '300px' : '40px')};
  @media screen and (max-width: 1023px) {
    padding: 0 16px;
  }
  @media screen and (max-width: 767px) {
    max-height: ${(props) => (props.isExpanded ? '95vh' : '40px')};
    bottom: 8px;
  }
  @media screen and (max-width: 424px) {
    bottom: 8px;
    padding: 0 8px;
    max-height: ${(props) => (props.isExpanded ? '95vh' : '40px')};
  }
`;

export default Player;
