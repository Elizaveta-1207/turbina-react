import React from 'react';
import PropTypes from 'prop-types';

export default function MediaPlayer({
  songs, currentSong,
}) {
  console.log(songs);
  const [audio, setAudio] = React.useState(new Audio('#'));
  const [isPlaying, setPlaying] = React.useState(false);
  const [isPlayBtnVisible, setIsPlayBtnVisible] = React.useState(true);
  const [isPauseBtnVisible, setIsPauseBtnVisible] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [timeString, setTimeString] = React.useState('00:00');
  const [playHeadWidth, setPlayHeadWidth] = React.useState('0%');

  const handlePlaybackClick = () => {
    setPlaying(!isPlaying);
    setIsPauseBtnVisible(!isPauseBtnVisible);
    setIsPlayBtnVisible(!isPlayBtnVisible);
  };

  React.useEffect(() => {
    setAudio(new Audio(currentSong.url));
  }, [currentSong]);

  React.useEffect(() => {
    if (isPlaying) {
      audio.play();
    }
    if (!isPlaying) {
      audio.pause();
    }
  }, [isPlaying]);

  audio.ontimeupdate = () => {
    setCurrentTime(Math.floor(audio.currentTime));
  };

  React.useEffect(() => {
    // вычисление ширины полосы прокрутки
    const playPercent = 100 * (audio.currentTime / audio.duration);
    setPlayHeadWidth(`${playPercent}%`);
    // формирование строки времени песни
    const s = `${Math.floor(currentTime % 60)}`.padStart(2, '0');
    const m = Math.floor(currentTime / 60);
    setTimeString(`${m}:${s}`);
    // Вычисляем ширину оставшегося времени на таймлайне
    /*     const timelineWidth = timeline.offsetWidth - playhead.offsetWidth; */
  }, [currentTime]);

  return (
    <section className="player">
      <audio className="player__music" preload="true">
      </audio>
      <div className="player__wrapper">
        <button
          className={`player__btn ${isPlayBtnVisible && 'player__btn_play'} ${isPauseBtnVisible && 'player__btn_pause'}`}
          onClick={handlePlaybackClick} />
        <span className="player__song-title">{`${currentSong.title} - ${currentSong.artist}`}</span>
    <span className="player__song-duration">{timeString}</span>
        <button className="player__btn player__btn_subtrack"></button>
        <div className="player__timeline">
          <div className="player__playhead" style={{ width: playHeadWidth }}></div>
        </div>
      </div>
    </section>
  );
}
MediaPlayer.propTypes = {
  songs: PropTypes.array.isRequired,
  currentSong: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
