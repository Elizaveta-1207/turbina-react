import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlaybackButton from './PlaybackButton';
import ExpandButton from './ExpandButton';
import MediaInfoBlock from './MediaInfoBlock';
import Ticker from '../../CommonUtils/TextUtils/Ticker';
import TimeIndicator from './TimeIndicator';
import PlayerInfoButton from './PlayerInfoButton';
import {
  Player,
  PlayerWrapper,
  Timeline,
  PlayHead,
  Songtitle,
  TickerTextContainer,
} from './StyledPlayerComponents/index';
import playlist from '../../../playlist';
// eslint-disable-next-line no-unused-vars
import throttle from '../../../utils/throttle';

const MediaPlayer = ({ color }) => {
  const audio = React.useRef();
  const timeline = React.useRef();
  const playhead = React.useRef();
  const songtitle = React.useRef();
  const songtitleWrap = React.useRef();

  // eslint-disable-next-line no-unused-vars
  const [currentSong, setCurrentSong] = useState(playlist[0]);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playHeadWidth, setPlayHeadWidth] = useState('0%');
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentIsText, setContentIsText] = useState(true);
  const [songTitleTextWidth, setSongTitleTextWidth] = useState();
  const [songtitleWrapWidth, setSontitleWrapWidth] = useState(0);

  const getCoordinates = (el) => el.getBoundingClientRect();

  window.addEventListener('resize', () => {
    if (!songtitleWrap.current && !songtitle.current) return;
    const parentWidth = getCoordinates(songtitleWrap.current).width;
    const childWidth = getCoordinates(songtitle.current).width;
    setSongTitleTextWidth(childWidth);
    setSontitleWrapWidth(parentWidth);
  });

  const handlePlaybackClick = () => {
    setPlaying(!isPlaying);
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };
  // здесь логика переключения песни на следующую из массива, либо назад
  const handleMediaEnd = () => {
    setPlaying(false);
  };

  const handleTimeUpdate = (evt) => {
    setCurrentTime(Math.floor(evt.target.currentTime));
  };

  const toggleContentState = () => {
    setContentIsText(!contentIsText);
  };
  const handleSongChange = (song) => {
    audio.current.src = song.audioFile;
    setCurrentSong(song);
    setPlaying(true);
  };
  useEffect(() => {
    setDuration(audio.current.duration);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
    }
    if (!isPlaying) {
      audio.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    setDuration(audio.current.duration);
    const playPercent = 100 * (audio.current.currentTime / audio.current.duration);
    setPlayHeadWidth(`${playPercent}%`);
  }, [currentTime]);

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

  return (
    <Player isExpanded={isExpanded} color={color}>
      <audio
        ref={audio}
        src={currentSong.audioFile}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleMediaEnd} />

      <PlayerWrapper isExpanded={isExpanded}>
        <PlaybackButton
          color={color}
          isPlaying={isPlaying}
          handlePlaybackClick={handlePlaybackClick} />
        <Songtitle ref={songtitleWrap}>
          <Ticker duration = '12s' parentWidth={songtitleWrapWidth} childWidth={songTitleTextWidth}>
            <TickerTextContainer ref={songtitle}>
              {currentSong.title} - {currentSong.artist}
              <Songtitle featured> feat.</Songtitle>
              {currentSong.child}
            </TickerTextContainer>
          </ Ticker>
        </Songtitle>
        <TimeIndicator currentTime={currentTime} duration={duration}/>
        {isExpanded
        && (<PlayerInfoButton onClick={toggleContentState} contentIsText={contentIsText} />)}
        <ExpandButton
          onClick={handleExpandClick}
          isExpanded={isExpanded}
          color={color} />
        <Timeline onClick={handleTimelineChange} ref={timeline}>
          <PlayHead
            onMouseDown={handlePlayheadDrag}
            ref={playhead}
            width={playHeadWidth}
            color={color}/>
        </Timeline>
        {isExpanded && (<MediaInfoBlock
          handleSongChange={handleSongChange}
          playlist={playlist}
          currentSong={currentSong}
          contentIsText={contentIsText} />)}
      </PlayerWrapper>
    </Player>
  );
};
MediaPlayer.propTypes = {
  songs: PropTypes.array.isRequired,
  currentSong: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  handleSongChange: PropTypes.func.isRequired,
};

export default MediaPlayer;
