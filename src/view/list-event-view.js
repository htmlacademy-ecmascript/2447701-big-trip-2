import { createElement } from '../render.js';

function createNewListEventView() {
  return `<ul class="trip-events__list"></ul>`;
}

export default class NewEventView {
  getTemplate() {
    return createNewListEventView();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

//с веткой накасячил уберу коммент не хочет комититься так просто
