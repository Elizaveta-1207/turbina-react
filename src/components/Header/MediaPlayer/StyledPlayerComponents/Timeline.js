import styled from 'styled-components/macro';

const Timeline = styled.div`
  grid-area: timeline;
  height: 6px;
  cursor: pointer;
  background-color: rgba(243, 243, 243, 0.3);
  @media screen and (max-width: 767px) {
    margin-top: 8px;
  }
`;

export default Timeline;
