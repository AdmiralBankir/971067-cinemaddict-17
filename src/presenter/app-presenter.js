import ProfileView from '../view/profile-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmDetailsPopupView from '../view/film-details-popup-view.js';

import {render} from '../render.js';

const NUM_OF_FILMS = 5;

export default class AppPresenter {
  filmsList = new FilmsListView();

  init = ({profileElement, mainElement, bodyElement}) => {
    if (!(profileElement &&  mainElement && bodyElement)) {
      throw new Error('Not enough parent elements for render!');
    }
    render(new ProfileView(), profileElement);

    render(new FiltersView(), mainElement);
    render(new SortView(), mainElement);
    render(this.filmsList, mainElement);

    this.filmsListContainer = this.filmsList.getFilmsContainerElement();

    for (let i = 0; i < NUM_OF_FILMS; i++) {
      render(new FilmCardView(), this.filmsListContainer);
    }

    render(new ShowMoreButtonView(), this.filmsListContainer, 'afterend');
    render(new FilmDetailsPopupView(), bodyElement);
  };
}
