/* eslint-disable class-methods-use-this */
import song1 from '../songs/song1.mp3';
import song3 from '../songs/song3.mp3';

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponseData(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Server interact Error! Status: ${response.status}`));
  }

  getSongs() {
    return Promise.resolve([
      {
        title: 'Контур',
        artist: 'Хадн Дадн',
        id: '423441',
        cover: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsWKgn9uYGGRHN20B3-oD2dCuOTrxCn__tuw&usqp=CAU)',
        clip: 'https://youtu.be/XkQp5L4h1Vg',
        child: 'Варя Карпова и Федя Быстров',
        audioFile: song1,
        text:
`I love la-la-la
oh, I love la-la-la
I love moo-moo-moo
oh, I love moo-moo-moo
I love la-la-la
oh, I love la-la-la`,
      },
      {
        title: 'THE SECOND GOAT SONG',
        artist: 'THE UPPERCASE BAND',
        id: '222233',
        child: 'lowercase little jules',
        audioFile: song3,
        text: 'Мой милый милый мальчик Моя милая милая девочка Никогда не знаешь что будет дальше В этой гадкой зиме',
      },
    ]);
  }
  /*   getSongs() {
    return fetch(`${this._baseUrl}/songs`, {
      'content-type': 'application/json',
      headers: this._headers,
      method: 'GET',
    })
      .then((res) => this._getResponseData(res));
  } */

  postForm() {
    return Promise.resolve('ok');
  }
}

export default new Api({
  baseUrl: 'n',
  headers: {
    authorization: 'none',
  },
});
