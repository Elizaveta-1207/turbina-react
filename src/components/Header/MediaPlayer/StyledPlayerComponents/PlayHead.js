import styled from 'styled-components/macro';

const PlayHead = styled.div.attrs((props) => ({
  style: {
    width: props.width,
  },
}))`
  height: 6px;
  width: 1px;
  max-width: 100%;
  background-color: ${(props) => props.color || 'white'};
`;

export default PlayHead;
