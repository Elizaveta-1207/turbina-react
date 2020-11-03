import React from 'react';
import PropTypes from 'prop-types';

export default function MediaInfoBlock({ songs, currentSong, contentIsText }) {
  const generateSongsList = (songsList) => {
    if (songsList.length === 0) return (<p>Пока это единственный релиз, но скоро будут новые</p>);
    return (
      <ul className="ulWithSideBar">
        {songsList.map((song) => (<li className="songItem" key={song.url}>{`${song.title} - ${song.artist}`}</li>))}
      </ul>
    );
  };
  const content = contentIsText
    ? (<span> {currentSong.text} </span>)
    : generateSongsList(songs);

  return (
    <div className="infoblock">{content}</div>
  );
}
MediaInfoBlock.propTypes = {
  currentSong: PropTypes.object.isRequired,
  songs: PropTypes.array.isRequired,
  contentIsText: PropTypes.bool.isRequired,
};
