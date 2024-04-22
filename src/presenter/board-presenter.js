import NewFilterView from '../view/filter-view.js';
import NewEventView from '../view/list-event-view.js';
import NewPointView from '../view/point-view.js';
import NewSortView from '../view/sort-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  sortComponent = new NewSortView();
  eventComponent = new NewEventView();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    render(this.sortComponent, this.container);
    render(this.eventComponent, this.component);
    render(new NewFilterView(), this.eventComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new NewPointView(), this.eventComponent.getElement());
    }
  }
}
