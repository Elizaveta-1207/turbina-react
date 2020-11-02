/* import path from 'path'; */

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // eslint-disable-next-line class-methods-use-this
  _getResponseData(response) {
    if (response.ok) { return response.json(); }
    return Promise.reject(new Error(`Server interact Error! Status: ${response.status}`));
  }

  // eslint-disable-next-line class-methods-use-this
  getSongs() {
    return Promise.resolve([
      {
        title: 'Контур',
        artist: 'Хадн Дадн feat. Варя Карпова и Федя Быстров',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        text: `I love la-la-la
        oh, I love la-la-la`,
      },
      {
        title: 'THE SECOND GOAT SONG',
        artist: 'THE UPPERCASE BAND',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        text: `gkbjerkbjretpbper kori gprop poog
        rt goiwoio ieru iii iuriiiiid d`,
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
}

export default new Api({
  baseUrl: 'n',
  headers: {
    authorization: 'none',
  },
});