import styled from 'styled-components/macro';

const SongItem = styled.a`
  display: table-cell;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
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
