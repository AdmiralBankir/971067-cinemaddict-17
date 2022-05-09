import { POSTERS } from './const.js';
import { getRandomInteger } from '../utils.js';


const getRandomPoster = () => {
  const poster = POSTERS[getRandomInteger(0 , POSTERS.length - 1)];
  return `./images/posters/${poster}`;
};

export const generateMovie = () => (
  {
    'id': '0',
    'comments': [
    ],
    'film_info': {
      'title': 'A Little Pony Without The Carpet',
      'alternative_title': 'Laziness Who Sold Themselves',
      'total_rating': 5.3,
      'poster': getRandomPoster(),
      'age_rating': getRandomInteger(0 , 18),
      'director': 'Tom Ford',
      'writers': [
        'Takeshi Kitano'
      ],
      'actors': [
        'Morgan Freeman'
      ],
      'release': {
        'date': '2019-05-11T00:00:00.000Z',
        'release_country': 'Finland'
      },
      'runtime': getRandomInteger(0 , 24),
      'genre': [
        'Comedy'
      ],
      'description': 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.'
    },
    'user_details': {
      'watchlist': false,
      'already_watched': true,
      'watching_date': '2019-04-12T16:12:32.554Z',
      'favorite': false
    }
  }
);