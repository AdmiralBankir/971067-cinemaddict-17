import { generateFilm } from '../mock/film.js';
import { generateCommentById } from '../mock/comment.js';
import { getRandomInteger } from '../utils.js';

const NUM_OF_FILMS = 5;
const NUM_OF_COMMENTS = NUM_OF_FILMS + getRandomInteger(0, NUM_OF_FILMS * NUM_OF_FILMS * NUM_OF_FILMS);

const generateUninqueIds = () => {
  const ids = Array.from({length: NUM_OF_COMMENTS}).map(() => getRandomInteger(1, NUM_OF_COMMENTS));
  const uniqueIds = new Set(ids);
  return Array.from(uniqueIds);
};

export default class CinemaAppModel {
  commentIds = generateUninqueIds();
  films = Array.from({length: NUM_OF_FILMS}).map(() => generateFilm());
  comments = this.commentIds.map((id) => {
    this.films[getRandomInteger(0, NUM_OF_FILMS - 1)].comments.push(id.toString());
    return generateCommentById(id);
  });

  getFilms = () => this.films;
  getComments = () => this.comments;
  getCommentsByIds = (ids) => this.comments.filter((comment) => ids.some((id) => id === comment.id));
}
