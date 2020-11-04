import React from 'react';
import Background from './Background';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import MediaPlayer from './MediaPlayer';
import Loader from './Loader';
import AppContext from '../contexts/AppContext';
import api from '../utils/api';

function App() {
  // set state
  const [songs, setSongs] = React.useState([]);
  const [currentSong, setCurrentSong] = React.useState({});
  const [isLoaderVisible, setLoaderVisibible] = React.useState(false);
  // set initial state with mount-dependant hook = load songs array
  React.useEffect(() => {
    setLoaderVisibible(true);
    api
      .getSongs()
      .then((songsArray) => {
        setSongs(songsArray);
        setCurrentSong(songsArray[0]);
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
  const handleFormSubmit = 'gggg'; // !!!!! temorary

  return (
    <AppContext.Provider value={currentSong}>
      <Background />
      <body className="page" >
        <Header />
        <MediaPlayer
          songs={songs}
          currentSong={currentSong} />
        <Main
          onFormSubmit={handleFormSubmit}/>
        <Footer />
        {isLoaderVisible && (<Loader />)}
      </body>
    </AppContext.Provider>
  );
}

export default App;
