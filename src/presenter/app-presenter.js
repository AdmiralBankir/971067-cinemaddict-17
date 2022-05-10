import ProfileView from '../view/profile-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmDetailsPopupView from '../view/film-details-popup-view.js';

import { render } from '../render.js';

export default class AppPresenter {
  #films = null;
  #filmsList = new FilmsListView();
  #appModel = null;
  #profileElement = null;
  #mainElement = null;
  #filmsListContainer = null;


  constructor({profileElement, mainElement}, appModel) {
    this.#appModel = appModel;
    this.#profileElement = profileElement;
    this.#mainElement = mainElement;
  }

  init = () => {
    if (!(this.#profileElement &&  this.#mainElement)) {
      throw new Error('Not enough parent elements for render!');
    }

    this.#renderApp();
  };

  #renderApp() {
    this.#films = [...this.#appModel.getFilms()];

    render(new ProfileView(), this.#profileElement);

    render(new FiltersView(), this.#mainElement);
    render(new SortView(), this.#mainElement);
    render(this.#filmsList, this.#mainElement);

    this.#filmsListContainer = this.#filmsList.filmsContainerElement;

    this.#films.forEach((film) => {
      this.#renderFilmCard(film);
    });

    render(new ShowMoreButtonView(), this.#filmsListContainer, 'afterend');
  }

  #renderFilmCard(film) {
    render(new FilmCardView(film), this.#filmsListContainer);
  }

  #handleOpenPopupClick(film) {
    const comments = this.#appModel.getCommentsByIds(film.comments);

    render(new FilmDetailsPopupView(film, comments), document.body);
  }
}
