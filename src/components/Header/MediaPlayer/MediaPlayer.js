import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlaybackButton from './PlaybackButton';
import ExpandButton from './ExpandButton';
import MediaInfoBlock from './MediaInfoBlock';
import Ticker from '../../CommonUtils/TextUtils/Ticker';
import TimeIndicator from './TimeIndicator';
import PlayerInfoButton from './PlayerInfoButton';
import Timeline from './Timeline';
import {
  Player,
  PlayerWrapper,
  Songtitle,
  TickerTextContainer,
} from './StyledPlayerComponents/index';
import playlist from '../../../playlist';

const MediaPlayer = ({ color }) => {
  const audio = React.useRef();
  const songtitle = React.useRef();
  const songtitleWrap = React.useRef();

  const [currentSong, setCurrentSong] = useState(playlist[0]);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playHeadWidth, setPlayHeadWidth] = useState('0%');
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentIsText, setContentIsText] = useState(true);
  const [songTitleTextWidth, setSongTitleTextWidth] = useState();
  const [songtitleWrapWidth, setSontitleWrapWidth] = useState(0);

  window.addEventListener('resize', () => {
    if (!songtitleWrap.current && !songtitle.current) return;
    const parentWidth = songtitleWrap.current.getBoundingClientRect().width;
    const childWidth = songtitle.current.getBoundingClientRect().width;
    setSongTitleTextWidth(childWidth);
    setSontitleWrapWidth(parentWidth);
  });

  const handlePlaybackClick = () => {
    setPlaying(!isPlaying);
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTimeUpdate = (evt) => {
    const songTime = Math.floor(evt.target.currentTime);
    if (songTime !== currentTime) setCurrentTime(songTime);
  };

  const toggleContentState = () => {
    setContentIsText(!contentIsText);
  };
  const handleSongChange = (song) => {
    setPlaying(false);
    setCurrentSong(song);
    audio.current.src = song.audioFile;
    audio.current.autoplay = true;
    setPlaying(true);
  };

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

  const handleTimelineChange = (sec) => {
    audio.current.currentTime = sec;
    audio.current.play();
  };

  const handleMediaEnd = () => {
    setPlaying();
    const currentIndex = playlist.indexOf(currentSong);
    let newSong;
    if (currentIndex + 1 < playlist.length) {
      newSong = playlist[currentIndex + 1];
    } else {
      [newSong] = playlist;
    }
    handleSongChange(newSong);
  };

  return (
    <Player isExpanded={isExpanded} color={color}>
      <audio
        ref={audio}
        src={currentSong.audioFile}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={() => setDuration(audio.current.duration)}
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
        <Timeline
          handleTimelineChange={handleTimelineChange}
          color={color}
          duration={duration}
          playHeadWidth={playHeadWidth} />
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
