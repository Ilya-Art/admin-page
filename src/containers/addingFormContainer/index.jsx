import { connect } from 'react-redux';
import { addNewCinema, addNewMovie, addNewServices, addNewSession } from '../../actions/actionCreators';
import AddingForm from '../../components/AddingForm';

const mapStateToProps = (state) => {
  return {
    cinemas: state.cinemas,
    movies: state.movies,
    services: state.services,
    sessions: state.sessions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCinemaClick: (data) => {
      dispatch(addNewCinema(data));
    },
    addNewMovieClick: (data) => {
      dispatch(addNewMovie(data));
    },
    addNewServiceClick: (data) => {
      dispatch(addNewServices(data));
    },
    addNewSessionClick: (data) => {
      dispatch(addNewSession(data));
    },
  };
};

const AddingFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddingForm);

export default AddingFormContainer;
