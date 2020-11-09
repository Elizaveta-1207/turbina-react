import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const InfoBlock = styled.div`
  color: inherit;
  display: block;
  grid-area: infoblock;
  height: 110px;
  transition: height 1s ease-in-out;
  margin-top: 40px;
  overflow-y: inherit;
  overflow-x: hidden;
  padding-right: 12px;
  @media screen and (max-width: 767px) {
    margin-top: 30px;
    height: 80px;
  }
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 3px;
    background-color: rgba(255, 255, 255, .1);
  }
  &::-webkit-scrollbar-thumb {
    height: 35px;
    background-color: rgba(255, 255, 255, .3);
    border-radius: 1px;
  }
`;

const MediaInfoBlock = ({ songs, currentSong, contentIsText }) => {
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
        );
        break;
      default:
        setContent(generateSongsList(songs));
    }
  }, [contentIsText]);

  return (<InfoBlock>{content}</InfoBlock>);
};
MediaInfoBlock.propTypes = {
  currentSong: PropTypes.object.isRequired,
  songs: PropTypes.array.isRequired,
  contentIsText: PropTypes.bool.isRequired,
};

export default MediaInfoBlock;
