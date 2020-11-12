import React from 'react';
import styled from 'styled-components/macro';
import Copyright from './Copyright';
import FooterLink from './FooterLink';

const StyledFooter = styled.footer`
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 424px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Footer() {
  const today = new Date();
  const yearNow = today.getFullYear();
  return (
    <StyledFooter>
      <Copyright text={`\u00A9 Маршак, ${yearNow}.`} />
      <Copyright text="Сделано студентами ">
        <FooterLink href="#" text="Яндекс.Практикум" />
      </Copyright>
    </StyledFooter>
  );
}
