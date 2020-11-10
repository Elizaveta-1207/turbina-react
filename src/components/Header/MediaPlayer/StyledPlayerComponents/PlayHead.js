import styled from 'styled-components/macro';

const PlayHead = styled.div`
  height: 6px;
  width: 1px;
  max-width: 100%;
  background-color: ${(props) => props.color || 'white'};
  width: ${(props) => props.width};
`;

export default PlayHead;
