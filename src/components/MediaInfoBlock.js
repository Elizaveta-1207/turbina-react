import React from 'react';
import PropTypes from 'prop-types';

export default function MediaInfoBlock({ songs, currentSong, contentIsText }) {
  const [content, setContent] = React.useState('');

  const generateSongsList = (songsList) => {
    if (songsList.length === 0) return (<p className="infoblock__subtitle">Пока что у нас только 1 релиз</p>);
    return (
      <>
      <p className="infoblock__subtitle">Релизы</p>
      <ul className="infoblock__songs-container">
        {songsList.map((song) => (
          <li className="infoblock__listItem" key={song.url}>
            <a className="infoblock__songItem">
              <span>{`${song.title} - ${song.artist}`}</span>
              <span className="infoblock__featured-text"> feat. </span>
              <span>{song.child}</span>
            </a>
          </li>))}
      </ul>
      </>
    );
  };

  React.useEffect(() => {
    switch (contentIsText) {
      case true:
        setContent(
          (<>
          <p className="infoblock__subtitle">Текст песни</p>
          <span className="infoblock__content"> {`${currentSong.text}`} </span></>),
          // а зачем тут шаблонная строка? там же по сути просто текст из свойства
        );
        break;
      default:
        setContent(generateSongsList(songs));
    }
  }, [contentIsText]);

  return (
    <div className="infoblock">{content}</div>
  );
}
MediaInfoBlock.propTypes = {
  currentSong: PropTypes.object.isRequired,
  songs: PropTypes.array.isRequired,
  contentIsText: PropTypes.bool.isRequired,
};
