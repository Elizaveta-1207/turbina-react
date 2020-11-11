import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import RoundedButton from '../../CommonUtils/Templates/RoundedButton';

const InfoButton = styled(RoundedButton)`
  grid-area: mode;
  width: 135px;
  height: 35px;
  padding: 0 10px;
  font-weight: 400;
  font-size: 16px;
  border-color: inherit;
  color: inherit;
  transition: opacity 0.3s ease-in-out;
  justify-self: end;

  &:hover {
    font-style: italic;;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 20px;
  }
  @media screen and (max-width: 424px) {
    font-size: 12px;
    height: 31px;
  }
`;

const PlayerInfoButton = ({ onClick, contentIsText }) => (
  <InfoButton onClick={onClick}>{contentIsText ? 'Релизы' : 'Текст песни'}</InfoButton>
);

PlayerInfoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  contentIsText: PropTypes.bool,
};

export default PlayerInfoButton;
