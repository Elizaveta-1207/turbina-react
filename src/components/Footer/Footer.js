import React from 'react';
import styled from 'styled-components/macro';
import Copyright from './Copyright';
import FooterLink from './FooterLink';
import Developers from './Developers';

const StyledFooter = styled.footer`
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 424px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Footer = () => {
  const today = new Date();
  const yearNow = today.getFullYear();
  return (
    <StyledFooter>
      <Copyright text={`\u00A9 Маршак, ${yearNow}.`} />
      <Developers>Сделано студентами <FooterLink href="https://praktikum.yandex.ru" text="Яндекс.Практикум" /></Developers>
    </StyledFooter>
  );
};

export default Footer;
