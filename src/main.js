import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import { render } from './render.js';

const siteMainElement = document.querySelector('.trip-events');
const siteFiltersElement = document.querySelector('.trip-controls__filters');

render(new FilterView(), siteFiltersElement);
const boardPresenter = new BoardPresenter({ boardContainer: siteMainElement });

boardPresenter.init();
