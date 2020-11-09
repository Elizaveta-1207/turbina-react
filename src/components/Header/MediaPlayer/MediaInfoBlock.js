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
const Subtitle = styled.p`
  margin: 0 0 16px 0;
  color: inherit;
  padding: 0;
  font-family: Inter, Arial, sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
  @media screen and (max-width: 424px) {
    font-size: 14px;
  }
`;
const BlockContent = styled.span`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
  white-space: pre;
  font-style: italic;
  font-family: Inter, Arial, sans-serif;
  &:last-of-type {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
  @media screen and (max-width: 424px) {
    font-size: 14px;
  }
`;
const songsContainer = styled.ul`
  color: inherit;
  list-style-type: none;
  padding: 0;
  margin: 0;
  padding-inline-start: 0;
`;
const ListItem = styled.li`
  color: inherit;
  margin-bottom: 16px;
  display: table;
  table-layout: fixed;
  width: 100%;
  &infoblock__listItem:last-of-type {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 424px) {
    margin-bottom: 10px;
  }
`;
const SongItem = styled.a`
  display: table-cell;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
  @media screen and (max-width: 424px) {
    font-size: 14px;
  }
`;
const Featured = styled.span`
  font-style: normal;
`;

const MediaInfoBlock = ({ songs, currentSong, contentIsText }) => {
  const [content, setContent] = React.useState('');

  const generateSongsList = (songsList) => {
    if (songsList.length === 0) return (<Subtitle>Пока что у нас только 1 релиз</Subtitle>);
    return (
      <>
      <Subtitle>Релизы</Subtitle>
      <songsContainer>
        {songsList.map((song) => (
          <ListItem key={song.id}>
            <SongItem>
              {`${song.title} - ${song.artist}`}
              <Featured> feat. </Featured>
              {song.child}
            </SongItem>
          </ListItem>))}
      </songsContainer>
      </>
    );
  };

  React.useEffect(() => {
    switch (contentIsText) {
      case true:
        setContent(
          (<>
          <Subtitle>Текст песни</Subtitle>
          <BlockContent> {`${currentSong.text}`} </BlockContent></>),
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
