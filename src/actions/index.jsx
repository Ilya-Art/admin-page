export const CHOOSE_ADDING_ACTION = 'CHOOSE_ADDING_ACTION';
export const ADD_NEW_CINEMA = 'ADD_NEW_CINEMA';

export const addingActions = {
  CHOOSE_ACTION: 'CHOOSE_ACTION',
  SHOW_ADD_NEW_CINEMA_FORM: 'SHOW_ADD_NEW_CINEMA_FORM',
  SHOW_ADD_NEW_MOVIE_FORM: 'SHOW_ADD_NEW_MOVIE_FORM',
  SHOW_ADD_NEW_SERVICES_FORM: 'SHOW_ADD_NEW_SERVICES_FORM',
  SHOW_ADD_NEW_SESSION_FORM: 'SHOW_ADD_NEW_SESSION_FORM',
};

export function chooseAddingAction(addingAction) {
  return {
    type: CHOOSE_ADDING_ACTION,
    addingAction,
  };
}

export function addNewCinema(name, town, holesCapacity) {
  return {
    type: ADD_NEW_CINEMA,
    name,
    town,
    holesCapacity,
  };
}
