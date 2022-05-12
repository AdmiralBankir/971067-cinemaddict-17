import AppPresenter from './presenter/app-presenter.js';
import FilmsCounterView from './view/films-counter-view.js';
import CinemaAppModel from './model/cinema-app-model.js';
import { render } from './render.js';

const profileElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const bodyElement = document.querySelector('body');
const footerStatElement = document.querySelector('.footer__statistics');

const appPresenter = new AppPresenter();
const appModel = new CinemaAppModel();

render(new FilmsCounterView(), footerStatElement);
appPresenter.init({profileElement, mainElement, bodyElement}, appModel);
