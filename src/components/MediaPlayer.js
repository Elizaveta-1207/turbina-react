import React from 'react';
import PropTypes from 'prop-types';
import PlaybackButton from './PlaybackButton';
import MediaInfoBlock from './MediaInfoBlock';

export default function MediaPlayer({
  songs, currentSong,
}) {
  const audio = React.useRef(null);
  const timeline = React.useRef();
  const playhead = React.useRef();

  const [audioSrc, setAudioSrc] = React.useState('#');
  const [isPlaying, setPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [timeString, setTimeString] = React.useState('00:00');
  const [playHeadWidth, setPlayHeadWidth] = React.useState('0%');
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [contentIsText, setContentIsText] = React.useState(true);

  const handlePlaybackClick = () => {
    setPlaying(!isPlaying);
  };

  // надо передать стейт кнопке
  const handleMediaEnd = () => {
    setPlaying(false);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(Math.floor(audio.current.currentTime));
  };

  const toggleContentState = () => {
    setContentIsText(!contentIsText);
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

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };
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
    <div className={`player player_expanded_${isExpanded}`}>
      <audio
        ref={audio}
        className="player__music"
        preload="auto"
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleMediaEnd}
        />
      <div className={`player__wrapper_expanded_${isExpanded}`} >
      <PlaybackButton
        isPlaying={isPlaying}
        handlePlaybackClick={handlePlaybackClick} />
        <span className="player__song-title">{`${currentSong.title} - ${currentSong.artist}`}</span>
        <span className="player__song-duration">{timeString}</span>
        {isExpanded && (<button className="player__info-button" onClick={toggleContentState}>{contentIsText ? 'Текст песни' : 'Релизы'}</button>)}
        <button
          className={`player__btn player__btn_subtrack player__btn_subtrack_expanded_${isExpanded}`}
          onClick={handleExpandClick}></button>
        <div className="player__timeline" onClick={handleTimelineClick} ref={timeline}>
          <div className="player__playhead" onMouseDown={handlePlayheadDrag} ref={playhead} style={{ width: playHeadWidth }}></div>
        </div>

        {isExpanded && (<MediaInfoBlock
          songs={songs}
          currentSong={currentSong}
          contentIsText={contentIsText} />)}
      </div>
    </div>
  );
}
MediaPlayer.propTypes = {
  songs: PropTypes.array.isRequired,
  currentSong: PropTypes.object.isRequired,
};
