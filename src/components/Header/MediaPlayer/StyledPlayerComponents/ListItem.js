import styled from 'styled-components/macro';

const ListItem = styled.li`
  color: inherit;
  margin-bottom: 16px;
  display: table;
  table-layout: fixed;
  width: 100%;
  &infoblock__listItem:last-of-type {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 424px) {
    margin-bottom: 10px;
  }
`;

export default ListItem;
