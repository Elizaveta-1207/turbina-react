import styled from 'styled-components/macro';

const SongItem = styled.a`
  display: table-cell;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-style: normal;
  opacity: ${(props) => (props.current ? '1' : '.7')};
  font-weight: ${(props) => (props.current ? '500' : '400')};
  font-size: 20px;
  line-height: 1.2;
  &:hover {
    font-style: italic;
  }
  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
  @media screen and (max-width: 424px) {
    font-size: 14px;
  }
`;

export default SongItem;
