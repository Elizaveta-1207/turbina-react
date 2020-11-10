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

const Page = styled.div`
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
  // eslint-disable-next-line no-unused-vars
  const [initPlaylist, setInitPlaylist] = React.useState([]);
  const [songs, setSongs] = React.useState([]);
  const [isLoaderVisible, setLoaderVisibible] = React.useState(false);

  /*   const generatePlaylist = (song = {}, list = []) => {
    const playlist = list.filter((i) => i.id !== song.id);
    setSongs(playlist);
  }; */

  React.useEffect(() => {
    setLoaderVisibible(true);
    api
      .getSongs()
      .then((songsArray) => {
        setSongs(songsArray);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoaderVisibible(false));
  }, []);
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
      <Background />
      <Page>
        <Header songs={songs} />
        <Main onFormSubmit={handleFormSubmit} />
        <Footer />
        {isLoaderVisible && (<Loader />)}
      </Page>
    </AppContext.Provider>
  );
}

export default App;
