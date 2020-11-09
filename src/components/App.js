import React from 'react';
import styled from 'styled-components/macro';
import Background from './CommonUtils/FunctionalUtils/Background';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Loader from './CommonUtils/FunctionalUtils/Loader';
import AppContext from '../contexts/AppContext';
import api from '../utils/api';
import config from '../turbinaconfig';

const Page = styled.body`
  min-width: 320px;
  max-width: 1280px;
  margin: 0 auto;
  font-family: "Inter", Arial, sans-serif;
  color: #fff;
  padding: 0 10px;
  transition: background-position 0.5s ease-out;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
`;

function App() {
  const currentAudio = React.useRef();

  const [initPlaylist, setInitPlaylist] = React.useState([]);
  const [songs, setSongs] = React.useState([]);
  const [currentSong, setCurrentSong] = React.useState({});
  const [isLoaderVisible, setLoaderVisibible] = React.useState(false);
  const [audio, setAudio] = React.useState(false);

  // лучше потом по ID
  // TODO! можно через useEffect сделать
  const generatePlaylist = (song = {}, list = []) => {
    const playlist = list.filter((i) => i.url !== song.url);
    setSongs(playlist);
  };

  React.useEffect(() => {
    setLoaderVisibible(true);
    api
      .getSongs()
      .then((songsArray) => {
        const initialSong = songsArray[0];
        setInitPlaylist(songsArray);
        generatePlaylist(initialSong, songsArray);
        setCurrentSong(initialSong);
        return initialSong.url;
      })
      .then((url) => {
        currentAudio.current.src = url;
        setAudio(currentAudio.current);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoaderVisibible(false));
  }, []);

  const handleSongChange = (song) => {
    generatePlaylist(song, initPlaylist);
  };
  // define UI handlers
  /*   const handleFormSubmit = (data) => {
    setLoaderVisibible(true);
    api.postForm(data)
      .catch((error) => console.log(error))
      .finally(() => setLoaderVisibible(false));
  }; */
  const handleFormSubmit = () => {};

  return (
    <AppContext.Provider value={config}>
      <audio ref={currentAudio} />
      <Background />
      <Page>
        <Header
          audio={audio}
          songs={songs}
          currentSong={currentSong}
          handleSongChange={handleSongChange} />

        <Main
          onFormSubmit={handleFormSubmit}/>
        <Footer />
        {isLoaderVisible && (<Loader />)}
      </Page>
    </AppContext.Provider>
  );
}

export default App;
