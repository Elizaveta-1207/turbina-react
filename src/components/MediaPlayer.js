import React from 'react';
import PropTypes from 'prop-types';

export default function MediaPlayer({
  songs, currentSong,
}) {
  const audio = React.useRef(null);
  console.log(songs);
  const [audioSrc, setAudioSrc] = React.useState('#');
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

  const handleTimeUpdate = () => {
    setCurrentTime(Math.floor(audio.current.currentTime));
  };

  React.useEffect(() => {
    setAudioSrc(currentSong.url);
  }, [currentSong]);

  React.useEffect(() => {
    if (isPlaying) {
      audio.current.play();
    }
    if (!isPlaying) {
      audio.current.pause();
    }
  }, [isPlaying]);

  React.useEffect(() => {
    // вычисление ширины полосы прокрутки
    const playPercent = 100 * (audio.current.currentTime / audio.current.duration);
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
      <audio
        ref={audio}
        className="player__music"
        preload="true"
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        />
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
};
