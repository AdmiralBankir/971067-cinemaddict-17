import AppPresenter from './presenter/app-presenter.js';
import FilmsCounterView from './view/films-counter-view.js';
import CinemaAppModel from './model/cinema-app-model.js';
import { render } from './render.js';

const profileElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerStatElement = document.querySelector('.footer__statistics');

const appModel = new CinemaAppModel();
const appPresenter = new AppPresenter({profileElement, mainElement}, appModel);


render(new FilmsCounterView(), footerStatElement);
appPresenter.init();
