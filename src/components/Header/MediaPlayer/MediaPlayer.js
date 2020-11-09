import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import PlaybackButton from './PlaybackButton';
import ExpandButton from './ExpandButton';
import MediaInfoBlock from './MediaInfoBlock';
import Ticker from '../../CommonUtils/TextUtils/Ticker';
import TimeIndicator from './TimeIndicator';
import PlayerInfoButton from './PlayerInfoButton';

const Player = styled.div`
  position: absolute;
  bottom: 32px;
  left: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  z-index: 2;
  transition: height 1s ease-in-out;
  color: ${(props) => props.color};
  height: ${(props) => (props.isExpanded ? '210px' : '80px')};
  @media screen and (max-width: 1023px) {
    padding: 16px;
  }
  @media screen and (max-width: 767px) {
    height: ${(props) => (props.isExpanded ? '200px' : '60px')};
  }
  @media screen and (max-width: 424px) {
    bottom: 20px;
    padding: 8px;
    height: ${(props) => (props.isExpanded ? '190px' : '40px')};
  }
`;
const PlayerWrapper = styled.div`
  color: inherit;
  box-sizing: border-box;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-rows: 35px 6px;
  grid-template-columns: ${(props) => (props.isExpanded
    ? '40px 6fr 1fr 167px 40px'
    : '40px 12fr 1fr 40px')};
  grid-template-areas: ${(props) => (props.isExpanded
    ? `'button title duration mode subtrack'
      '. timeline timeline . .'
      '. infoblock infoblock infoblock .'`
    : `'button title duration subtrack'
      '. timeline timeline .'`)};
  
  @media screen and (max-width: 767px) {
    grid-template-columns: 24px 6fr 1fr 24px;
    grid-template-areas: ${(props) => (props.isExpanded
    ? `'button title duration subtrack'
        '. timeline timeline .'
        '. mode mode .'
        '. infoblock infoblock .'`
    : `'button title duration subtrack'
        '. timeline timeline .'`)}
  }
`;
const Timeline = styled.div`
  grid-area: timeline;
  height: 6px;
  cursor: pointer;
  background-color: rgba(243, 243, 243, 0.3);
  @media screen and (max-width: 767px) {
    margin-top: 8px;
  }
`;
const PlayHead = styled.div`
  height: 6px;
  width: 1px;
  max-width: 100%;
  background-color: ${(props) => props.color || 'white'};
  width: ${(props) => props.width};
`;
const Songtitle = styled.span`
  font-family: Inter, Arial, sans-serif;
  grid-area: title;
  font-size: 20px;
  line-height: 1.3;
  color: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 8px;
  
  font-weight: ${(props) => (props.featured ? '400' : '500')};
  font-style: ${(props) => (props.featured ? 'italic' : 'normal')};
  @media screen and (max-width: 1023px) {
    font-size: 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
  @media screen and (max-width: 424px) {
    font-size: 14px;
  }
`;
const TickerTextContainer = styled.div`
  width: min-content;
`;

const MediaPlayer = ({ audia, songs, currentSong, color }) => {
  console.log(audia);
  const audio = React.useRef();
  const timeline = React.useRef();
  const playhead = React.useRef();
  const songtitle = React.useRef();
  const songtitleWrap = React.useRef();

  const [duration, setDuration] = React.useState(0);
  const [isPlaying, setPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [playHeadWidth, setPlayHeadWidth] = React.useState('0%');
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [contentIsText, setContentIsText] = React.useState(true);
  const [songTitleTextWidth, setSongTitleTextWidth] = React.useState();
  const [songtitleWrapWidth, setSontitleWrapWidth] = React.useState(0);

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
    if (audio) setDuration(audio.current.duration);
  }, []);

  React.useEffect(() => {
    if (isPlaying) {
      audio.current.play();
    }
    if (!isPlaying) {
      audio.current.pause();
    }
  }, [isPlaying]);

  React.useEffect(() => {
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
        preload="metadata"
        src={currentSong.url}
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
          songs={songs}
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
  audia: PropTypes.string.isRequired,
};

export default MediaPlayer;
