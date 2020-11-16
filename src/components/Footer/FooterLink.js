import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import AppContext from '../../contexts/AppContext';

const StyledFooterLink = styled.a`
  color: #fff;

  &:hover {
    font-style: italic;
  }
`;

const FooterLink = ({ text, link }) => {
  const { footer } = React.useContext(AppContext);
  const defaultLink = footer.link;
  return <StyledFooterLink href={link || defaultLink} target="_blank">{text}</StyledFooterLink>;
};

FooterLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};
// в идеале вынести бы куда-нибудь по внешний конфиг
// fixed - link при отсутствии в пропсах цепляется из конфига
export default FooterLink;
