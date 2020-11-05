import React from 'react';
import Background from './Background';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Loader from './Loader';
import AppContext from '../contexts/AppContext';
import api from '../utils/api';

function App() {
  // set state
  const [initPlaylist, setInitPlaylist] = React.useState([]);
  const [songs, setSongs] = React.useState([]);
  const [currentSong, setCurrentSong] = React.useState({});
  const [isLoaderVisible, setLoaderVisibible] = React.useState(false);

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
        // возможно потом будет метка, какую песню из архива выводить первой
        const initialSong = songsArray[0];
        setInitPlaylist(songsArray);
        generatePlaylist(initialSong, songsArray);
        setCurrentSong(initialSong);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoaderVisibible(false));
  }, []);

  const handleSongChange = (song) => {
    generatePlaylist(song, initPlaylist);
    setCurrentSong(song);
  };
  // define UI handlers
  /*   const handleFormSubmit = (data) => {
    setLoaderVisibible(true);
    api.postForm(data)
      .catch((error) => console.log(error))
      .finally(() => setLoaderVisibible(false));
  }; */
  const handleFormSubmit = 'gggg'; // !!!!! temorary

  return (
    <AppContext.Provider value={''}>
      <Background />
      <body className="page" >
        <Header
          songs={songs}
          currentSong={currentSong}
          handleSongChange={handleSongChange} />
        <Main
          onFormSubmit={handleFormSubmit}/>
        <Footer />
        {isLoaderVisible && (<Loader />)}
      </body>
    </AppContext.Provider>
  );
}

export default App;
