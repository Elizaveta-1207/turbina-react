import styled from 'styled-components/macro';

const Player = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  padding: 0 25px;
  box-sizing: border-box;
  z-index: 2;
  transition: height 1s ease-in-out;
  color: ${(props) => props.color};
  height: ${(props) => (props.isExpanded ? '176px' : '40px')};
  @media screen and (max-width: 1023px) {
    padding: 16px;
  }
  @media screen and (max-width: 767px) {
    height: ${(props) => (props.isExpanded ? '200px' : '60px')};
  }
  @media screen and (max-width: 424px) {
    bottom: 20px;
    padding: 8px;
    height: ${(props) => (props.isExpanded ? '400px' : '40px')};
  }
`;

export default Player;
