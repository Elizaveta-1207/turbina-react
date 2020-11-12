import styled from 'styled-components/macro';

const InfoBlock = styled.div`
  color: inherit;
  display: block;
  grid-area: infoblock;
  height: 110px;
  transition: height 1s ease-in-out;
  margin-top: 31px;
  overflow-y: inherit;
  overflow-x: hidden;
  padding-right: 12px;
  @media screen and (max-width: 767px) {
    margin-top: 30px;
    height: 80px;
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
