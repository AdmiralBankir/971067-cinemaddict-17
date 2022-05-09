import { POSTERS } from './const.js';
import { getRandomInteger, getRandomFloat } from '../utils.js';


const getRandomPoster = () => {
  const poster = POSTERS[getRandomInteger(0 , POSTERS.length - 1)];
  return `./images/posters/${poster}`;
};

export const generateFilm = () => (
  {
    'id': '0',
    'comments': [],
    'filmInfo': {
      'title': 'A Little Pony Without The Carpet',
      'alternativeTitle': 'Laziness Who Sold Themselves',
      'totalRating': getRandomFloat(0, 10).toFixed(1),
      'poster': getRandomPoster(),
      'ageRating': getRandomInteger(0 , 18),
      'director': 'Tom Ford',
      'writers': [
        'Takeshi Kitano'
      ],
      'actors': [
        'Morgan Freeman'
      ],
      'release': {
        'date': '2019-05-11T00:00:00.000Z',
        'releaseCountry': 'Finland'
      },
      'runtime': getRandomInteger(0 , 340),
      'genre': [
        'Comedy',
        'News'
      ],
      'description': 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.'
    },
    'userDetails': {
      'watchlist': false,
      'alreadyWatched': true,
      'watchingDate': '2019-04-12T16:12:32.554Z',
      'favorite': false
    }
  }
);
