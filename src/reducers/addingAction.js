import { CHOOSE_ADDING_ACTION, addingActions } from '../actions';

export default function addingAction(state = addingActions.CHOOSE_ACTION, action) {
  switch (action.type) {
  case CHOOSE_ADDING_ACTION:
    return Object.assign({}, state, { addingAction: action });
  default:
    return state;
  }
}
