import React from 'react';
import PropTypes from 'prop-types';

export default function MediaPlayer({
  songs, currentSong, isPlaying, handlePlaybackClick,
}) {
  console.log(songs, handlePlaybackClick.toString(), isPlaying);
  /*   const music = document.querySelector('.player__music'); */
  const duration = '33:33';
  /*   const playerBtn = document.querySelector('.player__btn'); */
  /*   const timeline = document.querySelector('player__timeline');
  const durationTime = document.querySelector('.player__song-duration'); */
  /*
  function play() {
    if (music.paused) {
      music.play();
      playerBtn.classList.remove('play');
      playerBtn.classList.add('pause');
    } else {
      music.pause();
      playerBtn.classList.remove('pause');
      playerBtn.classList.add('play');
    }
  }
  playerBtn.addEventListener('click', play); */
  return (
    <section className="player">
      <audio className="player__music" preload="true">
        <source src={currentSong.url} />
      </audio>
      <div className="player__wrapper">
        <button className="player__btn play"></button>
  <span className="player__song-title">{`${currentSong.title} - ${currentSong.artist}`}</span>
        <span className="player__song-duration">{duration}</span>
        <div className="player__timeline"></div>
      </div>
    </section>
  );
}
MediaPlayer.propTypes = {
  handlePlaybackClick: PropTypes.func.isRequired,
  songs: PropTypes.array.isRequired,
  currentSong: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
