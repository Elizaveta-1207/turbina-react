import styled from 'styled-components/macro';

const PlayerWrapper = styled.div`
  color: inherit;
  box-sizing: border-box;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-rows: ${(props) => (props.isExpanded
    ? '42px 6px 28px 96px'
    : '42px 6px')};
  grid-template-columns: ${(props) => (props.isExpanded
    ? '176px 60px 10fr 1fr 114px 145px 40px'
    : '38px 12fr 1fr 44px')};
  grid-template-areas: ${(props) => (props.isExpanded
    ? `'cover button title duration clip mode subtrack'
      'cover . timeline timeline . . .'
      'cover . . . . . .'
      'cover . infoblock infoblock infoblock infoblock .'`
    : `'button title duration subtrack'
      '. timeline timeline .'`)};
  
  @media screen and (max-width: 1023px) {
    grid-template-rows: ${(props) => (props.isExpanded
    ? '34px 6px 20px 112px'
    : '34px 6px')};
    grid-template-columns:  ${(props) => (props.isExpanded
    ? '40px 112px 5fr 1fr 114px 145px 40px'
    : '40px 10fr 1fr 40px')};
    grid-template-areas: ${(props) => (props.isExpanded
    ? `'button title title duration clip mode subtrack'
        '. timeline timeline timeline . . .'
        '. . . . . . .'
        '. cover infoblock infoblock infoblock infoblock .'`
    : `'button title duration subtrack'
        '. timeline timeline .'`)}
  }
  @media screen and (max-width: 767px) {
    grid-template-rows: ${(props) => (props.isExpanded
    ? '24px 6px 20px minmax(240px, 1fr) 20px 31px 30px 80px'
    : '24px 6px')};
    grid-template-columns: 24px 6fr 1fr 24px;
    grid-template-areas: ${(props) => (props.isExpanded
    ? `'button title duration subtrack'
        '. timeline timeline .'
        '. . . .'
        '. cover cover .'
        '. . . .'
        '. clip mode .'
        '. . . .'
        '. infoblock infoblock .'`
    : `'button title duration subtrack'
        '. timeline timeline .'`)}
  }
`;

export default PlayerWrapper;
