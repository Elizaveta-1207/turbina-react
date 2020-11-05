import React from 'react';
import PropTypes from 'prop-types';
import PlaybackButton from './PlaybackButton';
import MediaInfoBlock from './MediaInfoBlock';
import Ticker from './Ticker';

export default function MediaPlayer({ songs, currentSong }) {
  const audio = React.useRef(null);
  const timeline = React.useRef();
  const playhead = React.useRef();
  const songtitle = React.useRef();
  const songtitleWrap = React.useRef();

  const [audioSrc, setAudioSrc] = React.useState('#');
  const [isPlaying, setPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [timeString, setTimeString] = React.useState('00:00');
  const [playHeadWidth, setPlayHeadWidth] = React.useState('0%');
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [contentIsText, setContentIsText] = React.useState(true);
  const [isSongtitleTickerActive, setIsSongtitleTickerActive] = React.useState();
  const [songtitleWrapWidth, setSontitleWrapWidth] = React.useState();

  window.onresize = () => {
    const { width } = songtitleWrap.current.getBoundingClientRect();
    setSontitleWrapWidth(width);
  };

  const handlePlaybackClick = () => {
    setPlaying(!isPlaying);
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };
  // надо будет передать стейт кнопке и проверить смену песен
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
    const playPercent = 100 * (audio.current.currentTime / audio.current.duration);
    setPlayHeadWidth(`${playPercent}%`);
    const s = `${Math.floor(currentTime % 60)}`.padStart(2, '0');
    const m = Math.floor(currentTime / 60);
    setTimeString(`${m}:${s}`);
  }, [currentTime]);

  const getCoordinates = (el) => el.getBoundingClientRect();

  const handleTimelineChange = (evt) => {
    const timelineBeginX = getCoordinates(timeline.current).left;
    const timelineEndX = getCoordinates(timeline.current).right;
    const timelineLength = getCoordinates(timeline.current).width;
    let targetX;
    if (evt.clientX < timelineBeginX) {
      targetX = timelineBeginX;
    } else if (evt.clientX > timelineEndX) {
      targetX = timelineEndX;
    } else {
      targetX = evt.clientX;
    }
    const songProgressPercentage = (targetX - timelineBeginX) / timelineLength;
    const songProgressSeconds = Math.round(audio.current.duration * songProgressPercentage);
    audio.current.currentTime = songProgressSeconds;
  };

  const handlePlayheadDrag = () => {
    let mouseDown = true;
    window.addEventListener('mouseup', () => {
      mouseDown = false;
      window.removeEventListener('mouseup', () => {});
    });
    window.addEventListener('mousemove', (evt) => {
      if (mouseDown) handleTimelineChange(evt);
    });
  };

  React.useEffect(() => {
    console.log(`songtitleWrapWidth: ${songtitleWrapWidth}`);
    const songtitleTextWidth = songtitle.current.getBoundingClientRect().width;
    setIsSongtitleTickerActive(songtitleWrapWidth <= songtitleTextWidth);
  }, [songtitleWrapWidth]);

  return (
    <div className={`player player_expanded_${isExpanded}`}>
      <audio
        ref={audio}
        className="player__music"
        preload="auto"
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleMediaEnd} />
      <div className={`player__wrapper_expanded_${isExpanded}`} >
      <PlaybackButton
        isPlaying={isPlaying}
        handlePlaybackClick={handlePlaybackClick} />
      <span ref={songtitleWrap} className="player__song-title">
        <Ticker duration = '12s' active={isSongtitleTickerActive}>
          <div ref={songtitle} style={{ width: 'min-content' }}>
            {currentSong.title} - {currentSong.artist}
            <span className="player__song-title player__featured-text"> feat.</span>
            {currentSong.child}
          </div>
        </ Ticker>
      </span>

      <div className="player__song-duration">{timeString}</div>
      {isExpanded && (<button className="player__info-button" onClick={toggleContentState}>{contentIsText ? 'Релизы' : 'Текст песни'}</button>)}
      <button
        className={`player__btn player__btn_subtrack player__btn_subtrack_expanded_${isExpanded}`}
        onClick={handleExpandClick}></button>
      <div className="player__timeline" onClick={handleTimelineChange} ref={timeline}>
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
