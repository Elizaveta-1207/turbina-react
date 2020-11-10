import styled from 'styled-components/macro';

const Songtitle = styled.span`
  font-family: Inter, Arial, sans-serif;
  grid-area: title;
  font-size: 20px;
  line-height: 1.3;
  color: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 8px;
  
  font-weight: ${(props) => (props.featured ? '400' : '500')};
  font-style: ${(props) => (props.featured ? 'italic' : 'normal')};
  @media screen and (max-width: 1023px) {
    font-size: 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
  @media screen and (max-width: 424px) {
    font-size: 14px;
  }
`;

export default Songtitle;
