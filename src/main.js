import createNewFilterView from './view/filter-view.js';
import createNewListEventView from './view/list-event-view.js';
import createNewPointView from './view/point-view.js';
import createNewSortView from './view/sort-view.js';
import createNewTrioListView from './view/trip-list-view.js';
import { render } from './render.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

render(
  new createNewFilterView(),
  new createNewListEventView(),
  new createNewPointView(),
  new createNewSortView(),
  new createNewTrioListView(),
  siteHeaderElement
);
