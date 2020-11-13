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

const Page = styled.main`
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

const App = () => {
  const [playlist, setPlaylist] = React.useState([]);
  const [isLoaderVisible, setLoaderVisibible] = React.useState(false);

  React.useEffect(() => {
    setLoaderVisibible(true);
    // здесь имитация обращения к апи
    api
      .getSongs()
      .then((songsArray) => {
        setPlaylist(songsArray);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoaderVisibible(false));
  }, []);

  const onFormSubmit = (data) => {
    // здесь имитация обращения к апи
    setLoaderVisibible(true);
    api
      .postForm(data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        /*         return Promise.reject(new Error({
          error: 'Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!',
        })); */
      })
      .finally(() => setLoaderVisibible(false));
    const random = Math.round(Math.random());
    if (random) {
      return Promise.resolve({
        successMessage: 'Ура, форма отправлена!',
      });
    }
    return Promise.reject(new Error({
      error: 'Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!',
    }));
  };

  return (
    <AppContext.Provider value={config}>
      <Background />
      <Page>
        <Header playlist={playlist} />
        <Main onFormSubmit={onFormSubmit} />
        <Footer />
        {isLoaderVisible && (<Loader />)}
      </Page>
    </AppContext.Provider>
  );
};

export default App;
