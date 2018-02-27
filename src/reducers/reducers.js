import { addingActions } from '../actions/actionTypes';

// export default function addingAction(state = [], action) {
//   switch (action.type) {
//   case addingActions.ADD_NEW_CINEMA:
//     return Object.assign({}, state, { cinemasArray: state.cinemasArray.push(action.payload) });
//   case addingActions.ADD_NEW_MOVIE:
//     return Object.assign({}, state, { moviesArray: state.moviesArray.push(action.payload) });
//   case addingActions.ADD_NEW_SERVICES:
//     return Object.assign({}, state, { cinemasArray: state.cinemasArray.push(action.payload) });
//   case addingActions.ADD_NEW_SESSION:
//     return Object.assign({}, state, { cinemasArray: state.cinemasArray.push(action.payload) });
//   default:
//     return state;
//   }
// }

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
