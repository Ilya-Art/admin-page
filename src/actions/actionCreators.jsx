import { addingActions } from './actionTypes';

export function addNewCinema({ name }, { town }, { holesCapacity }) {
  return {
    type: addingActions.ADD_NEW_CINEMA,
    payload: {
      name,
      town,
      holesCapacity,
    },
  };
}

export function addNewMovie({ movieTitle }, { startSessionDate }, { endSessionDate }, { description } ) {
  return {
    type: addingActions.ADD_NEW_MOVIE,
    payload: {
      movieTitle,
      startSessionDate,
      endSessionDate,
      description,
    },
  };
}

export function addNewServices({ serviceName }, { description }) {
  return {
    type: addingActions.ADD_NEW_SERVICE,
    payload: {
      serviceName,
      description,
    },
  };
}

export function addNewSession({ movieTitle }, { cinemaName }, { hole }, { price }, { date }, { time }) {
  return {
    type: addingActions.ADD_NEW_SESSION,
    payload: {
      movieTitle,
      cinemaName,
      hole,
      price,
      date,
      time,
    },
  };
}
