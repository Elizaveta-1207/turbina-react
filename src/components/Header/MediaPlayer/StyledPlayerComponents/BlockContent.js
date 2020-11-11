import styled from 'styled-components/macro';

const BlockContent = styled.span`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
  white-space: pre-line;
  font-style: italic;
  font-family: Inter, Arial, sans-serif;
  &:last-of-type {
    margin-bottom: 0px;
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

export default BlockContent;
