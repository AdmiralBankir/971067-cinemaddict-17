import ProfileView from '../view/profile-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmDetailsPopupView from '../view/film-details-popup-view.js';

import { render } from '../render.js';

export default class AppPresenter {
  filmsList = new FilmsListView();

  constructor() {
    this.isRenderedPopup = false;
  }

  init = ({profileElement, mainElement, bodyElement}, appModel) => {
    if (!(profileElement &&  mainElement && bodyElement)) {
      throw new Error('Not enough parent elements for render!');
    }

    this.films = appModel.getFilms();
    this.comments = appModel.getComments();

    render(new ProfileView(), profileElement);

    render(new FiltersView(), mainElement);
    render(new SortView(), mainElement);
    render(this.filmsList, mainElement);

    this.filmsListContainer = this.filmsList.getFilmsContainerElement();

    for (let i = 0; i < this.films.length; i++) {
      render(new FilmCardView(this.films[i]), this.filmsListContainer);
    }

    render(new ShowMoreButtonView(), this.filmsListContainer, 'afterend');

    if (this.isRenderedPopup) {
      render(new FilmDetailsPopupView(), bodyElement);
    }
  };
}
