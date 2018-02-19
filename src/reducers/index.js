import addingAction from './addingAction';
import { combineReducers } from 'redux';

// const initialState = {
//   // movies: [],
//   // cinemas: [],
//   // services: [],
//   // sessions: [],
//   addingAction: addingActions.CHOOSE_ACTION,
// };

const appReducer = combineReducers({
  addingAction,
});

export default appReducer;

// export default function appReducer(state = initialState, action) {
//   return {
//     addingAction: (state.addingAction, action),
//   }
// }
