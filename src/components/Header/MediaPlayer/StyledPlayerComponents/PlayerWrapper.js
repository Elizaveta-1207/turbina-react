import styled from 'styled-components/macro';

const PlayerWrapper = styled.div`
  color: inherit;
  box-sizing: border-box;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-rows: 35px 6px;
  grid-template-columns: ${(props) => (props.isExpanded
    ? '40px 6fr 1fr 167px 40px'
    : '40px 12fr 1fr 40px')};
  grid-template-areas: ${(props) => (props.isExpanded
    ? `'button title duration mode subtrack'
      '. timeline timeline . .'
      '. infoblock infoblock infoblock .'`
    : `'button title duration subtrack'
      '. timeline timeline .'`)};
  
  @media screen and (max-width: 767px) {
    grid-template-columns: 24px 6fr 1fr 24px;
    grid-template-areas: ${(props) => (props.isExpanded
    ? `'button title duration subtrack'
        '. timeline timeline .'
        '. mode mode .'
        '. infoblock infoblock .'`
    : `'button title duration subtrack'
        '. timeline timeline .'`)}
  }
`;

export default PlayerWrapper;
