import styled from 'styled-components/macro';

const InfoBlock = styled.div`
  color: inherit;
  display: block;
  grid-area: infoblock;
  height: 100%;
  transition: height 1s ease-in-out;
  overflow-y: inherit;
  overflow-x: hidden;
  padding: 0 8px 0 0;
  @media screen and (max-width: 1023px) {
    padding: 8px 12px 4px 30px;
  }
  @media screen and (max-width: 767px) {
    padding: 4px 8px;
  }
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 3px;
    background-color: rgba(255, 255, 255, .1);
  }
  &::-webkit-scrollbar-thumb {
    height: 35px;
    background-color: rgba(255, 255, 255, .3);
    border-radius: 1px;
  }
`;

export default InfoBlock;
