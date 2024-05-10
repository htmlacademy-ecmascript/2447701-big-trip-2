import EventView from '../view/list-event-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import FormView from '../view/form-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  sortComponent = new SortView();
  eventComponent = new EventView();

  constructor({ boardContainer }) {
    this.container = boardContainer;
  }

  init() {
    render(this.sortComponent, this.container);
    render(this.eventComponent, this.container);
    render(new FormView(), this.eventComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.eventComponent.getElement());
    }
  }
}
