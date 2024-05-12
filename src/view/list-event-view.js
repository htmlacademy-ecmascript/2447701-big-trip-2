import { createElement } from '../render.js';

function createListEventView() {
  return `<ul class="trip-events__list"></ul>`;
}

export default class EventView {
  getTemplate() {
    return createListEventView();
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
