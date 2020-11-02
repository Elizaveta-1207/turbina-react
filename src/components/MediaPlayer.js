import React from 'react';
import PropTypes from 'prop-types';

export default function MediaPlayer({
  songs, currentSong,
}) {
  const audio = React.useRef(null);
  const timeline = React.useRef();
  const playhead = React.useRef();

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
  }, [currentTime]);

  // получение объекта DOM в разрезе его пиксельных координат относительно вьюпорта
  const getCoordinates = (el) => el.getBoundingClientRect();
  // Обработка клика на таймлайн
  const handleTimelineClick = (evt) => {
    const timelineBeginX = getCoordinates(timeline.current).left;
    const timelineEndX = getCoordinates(timeline.current).left;
    const timelineLength = getCoordinates(timeline.current).width;
    let clickedX;
    if (evt.clientX < timelineBeginX) {
      clickedX = timelineBeginX;
    } else if (evt.clientX < timelineBeginX) {
      clickedX = timelineEndX;
    } else {
      clickedX = evt.clientX;
    }
    const songProgressPercentage = (clickedX - timelineBeginX) / timelineLength;
    const songProgressSeconds = Math.round(audio.current.duration * songProgressPercentage);
    audio.current.currentTime = songProgressSeconds;
  };

  const handlePlayheadDrag = () => {
    let mouseUp = false;
    window.addEventListener('mouseup', () => {
      if (!mouseUp) {
        mouseUp = true;
        setPlaying(true);
        window.removeEventListener('mouseup', () => {});
      }
    });
    window.addEventListener('mousemove', (evt) => {
      if (!mouseUp) handleTimelineClick(evt);
    });
  };

  return (
    <section className="player">
      <audio
        ref={audio}
        className="player__music"
        preload="true"
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        /* onEnded={} */
        />
      <div className="player__wrapper">
        <button
          className={`player__btn ${isPlayBtnVisible && 'player__btn_play'} ${isPauseBtnVisible && 'player__btn_pause'}`}
          onClick={handlePlaybackClick} />
        <span className="player__song-title">{`${currentSong.title} - ${currentSong.artist}`}</span>
        <span className="player__song-duration">{timeString}</span>
        <button className="player__btn player__btn_subtrack"></button>
        <div className="player__timeline" onClick={handleTimelineClick} ref={timeline}>
          <div className="player__playhead" onMouseDown={handlePlayheadDrag} ref={playhead} style={{ width: playHeadWidth }}></div>
        </div>
      </div>
    </section>
  );
}
MediaPlayer.propTypes = {
  songs: PropTypes.array.isRequired,
  currentSong: PropTypes.object.isRequired,
};
