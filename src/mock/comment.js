import { EMOTIONS } from './const.js';
import { getRandomInteger } from '../utils';

export const generateCommentById = (id) => (
  {
    'id': `${id}`,
    'author': 'Ilya O\'Reilly',
    'comment': 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    'date': '2021-05-09T17:12:32.554Z',
    'emotion': EMOTIONS[getRandomInteger(0, EMOTIONS.length - 1)]
  }
);
