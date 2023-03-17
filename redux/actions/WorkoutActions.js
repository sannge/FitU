import {
  fetchExercisesLoading,
  fetchExercisesSuccess,
  fetchExercisesError,
} from "../reducers/WorkoutReducer";

export const fetchExercises = () => async (dispatch) => {
  dispatch(fetchExercisesLoading());
  try {
    const response = await fetch("/api/exercises");
    const data = await response.json();
    dispatch(fetchExercisesSuccess(data));
  } catch (error) {
    dispatch(fetchExercisesError(error.message));
  }
};

export const addExercise = (exercise) => (dispatch) => {
  dispatch(addExercise(exercise));
};
