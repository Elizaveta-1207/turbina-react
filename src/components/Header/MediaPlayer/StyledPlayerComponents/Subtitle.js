import styled from 'styled-components/macro';

const Subtitle = styled.p`
  margin: 0 0 16px 0;
  color: inherit;
  padding: 0;
  font-family: Inter, Arial, sans-serif;
  font-style: italic;
  font-weight: 400;
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

export default Subtitle;
