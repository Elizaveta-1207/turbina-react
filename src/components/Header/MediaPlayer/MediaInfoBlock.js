import React from 'react';
import PropTypes from 'prop-types';
import {
  InfoBlock,
  Subtitle,
  BlockContent,
  SongsContainer,
  ListItem,
  SongItem,
  Featured,
} from './StyledPlayerComponents/index';

const MediaInfoBlock = ({ playlist, currentSong, contentIsText, handleSongChange }) => {
  const [content, setContent] = React.useState('');

  const generateSongsList = () => {
    if (playlist.length === 1) return (<Subtitle>Пока что у нас только 1 релиз</Subtitle>);
    return (
      <>
      <Subtitle>Релизы:</Subtitle>
      <SongsContainer>
        {playlist
          .map((song) => (
            <ListItem key={song.id}>
              <SongItem current={song.id === currentSong.id} onClick={
                () => handleSongChange(song)}>
                {`${song.title} - ${song.artist}`}
                <Featured> feat. </Featured>
                {song.child}
              </SongItem>
            </ListItem>))}
      </SongsContainer>
      </>
    );
  };

  React.useEffect(() => {
    switch (contentIsText) {
      case true:
        setContent(
          (<>
          <Subtitle>Текст песни:</Subtitle>
          <BlockContent> {`${currentSong.text}`} </BlockContent></>),
        );
        break;
      default:
        setContent(generateSongsList());
    }
  }, [contentIsText, currentSong]);

  return (<InfoBlock>{content}</InfoBlock>);
};
MediaInfoBlock.propTypes = {
  currentSong: PropTypes.object.isRequired,
  playlist: PropTypes.array.isRequired,
  contentIsText: PropTypes.bool.isRequired,
  handleSongChange: PropTypes.func.isRequired,
};

export default MediaInfoBlock;
