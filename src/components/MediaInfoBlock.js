import React from 'react';
import PropTypes from 'prop-types';

export default function MediaInfoBlock({ songs, currentSong, contentIsText }) {
  const generateSongsList = (songsList) => {
    if (songsList.length === 0) return (<p className="infoblock__content infoblock__no-content-msg">Пока это единственный релиз, но скоро будут новые</p>);
    return (
      <ul className="infoblock__songs-container">
        {songsList.map((song) => (<li className="infoblock__listItem" key={song.url}> <a className="infoblock__content infoblock__songItem" href="#">{`${song.title} - ${song.artist}`}</a></li>))}
      </ul>
    );
  };
  const content = contentIsText
    ? generateSongsList(songs)
    : (<span className="infoblock__content"> {`${currentSong.text}`} </span>);

  return (
    <div className="infoblock">{content}</div>
  );
}
MediaInfoBlock.propTypes = {
  currentSong: PropTypes.object.isRequired,
  songs: PropTypes.array.isRequired,
  contentIsText: PropTypes.bool.isRequired,
};
