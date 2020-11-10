import styled from 'styled-components/macro';

const Player = styled.div`
  position: absolute;
  bottom: 32px;
  left: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  z-index: 2;
  transition: height 1s ease-in-out;
  color: ${(props) => props.color};
  height: ${(props) => (props.isExpanded ? '210px' : '80px')};
  @media screen and (max-width: 1023px) {
    padding: 16px;
  }
  @media screen and (max-width: 767px) {
    height: ${(props) => (props.isExpanded ? '200px' : '60px')};
  }
  @media screen and (max-width: 424px) {
    bottom: 20px;
    padding: 8px;
    height: ${(props) => (props.isExpanded ? '190px' : '40px')};
  }
`;

export default Player;
