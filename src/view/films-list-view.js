import {createElement} from '../render.js';

const createFilmsListTemplate = () => (
  `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container">
      </div>
    </section>
  </section>
  `
);

export default class FilmsListView {
  getTemplate() {
    return createFilmsListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  getFilmsContainerElement() {
    if (this.element) {
      return this.element.querySelector('.films-list__container');
    }
  }

  removeElement() {
    this.element = null;
  }
}
