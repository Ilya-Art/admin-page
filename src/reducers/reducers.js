import { addingActions } from '../actions/actionTypes';

export function cinemas(state = [], action) {
  switch (action.type) {
  case addingActions.ADD_NEW_CINEMA:
    return [
      ...state,
      action.payload,
    ];
  default:
    return state;
  }
}

export function movies(state = [], action) {
  switch (action.type) {
  case addingActions.ADD_NEW_MOVIE:
    return [
      ...state,
      action.payload,
    ];
  default:
    return state;
  }
}

export function services(state = [], action) {
  switch (action.type) {
  case addingActions.ADD_NEW_SERVICE:
    return [
      ...state,
      action.payload,
    ];
  default:
    return state;
  }
}

export function sessions(state = [], action) {
  switch (action.type) {
  case addingActions.ADD_NEW_SESSION:
    return [
      ...state,
      action.payload,
    ];
  default:
    return state;
  }
}
