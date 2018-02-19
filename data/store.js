import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import Pages from './pages';

// Initial State
const initialState = {
  page: Pages.PROJECTS.slug
};

// Action Types
export const actionTypes = {
  CHANGE_PAGE: 'CHANGE_PAGE'
};

// Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PAGE:
      return Object.assign({}, state, { page: action.page });
    default:
      return state;
  }
};

// Action Dispatchers
export const changePage = page => {
  return { type: actionTypes.CHANGE_PAGE, page: page };
};

// create a store creator
export const makeStore = initialState => {
  return createStore(reducer, initialState, devToolsEnhancer());
};
