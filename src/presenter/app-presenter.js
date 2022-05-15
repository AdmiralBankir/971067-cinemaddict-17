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
  #body = null;
  #popUp = null;


  constructor({profileElement, mainElement}, appModel) {
    this.#appModel = appModel;
    this.#profileElement = profileElement;
    this.#mainElement = mainElement;
  }

  init = () => {
    if (!(this.#profileElement &&  this.#mainElement)) {
      throw new Error('Not enough parent elements for render!');
    }

    this.#body = document.body;
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
    const filmView = new FilmCardView(film);
    render(filmView, this.#filmsListContainer);
    filmView.element.addEventListener('click', () => this.#handleOpenPopup(film));
  }

  #handleOpenPopup(film) {
    const comments = this.#appModel.getCommentsByIds(film.comments);
    this.#popUp = new FilmDetailsPopupView(film, comments);
    render(this.#popUp, this.#body);
    this.#body.classList.add('hide-overflow');

    this.#popUp.closeButton.addEventListener('click', () => this.#handleClosePopup());

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        this.#handleClosePopup();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };
    document.addEventListener('keydown', onEscKeyDown);
  }

  #handleClosePopup() {
    this.#popUp.element.remove();
    this.#body.classList.remove('hide-overflow');
  }
}
