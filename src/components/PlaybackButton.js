import React from 'react';
import PropTypes from 'prop-types';

export default function PlaybackButton({ isPlaying, handlePlaybackClick }) {
  const [isPlayBtnVisible, setIsPlayBtnVisible] = React.useState(!isPlaying);
  const [isPauseBtnVisible, setIsPauseBtnVisible] = React.useState(isPlaying);

  const handleClick = () => {
    handlePlaybackClick();
    setIsPauseBtnVisible(!isPauseBtnVisible);
    setIsPlayBtnVisible(!isPlayBtnVisible);
  };

  return (
    <button
    className={`player__btn ${isPlayBtnVisible && 'player__btn_play'} ${isPauseBtnVisible && 'player__btn_pause'}`}
    onClick={handleClick} />
  );
}
PlaybackButton.propTypes = {
  handlePlaybackClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
