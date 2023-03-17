import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exercises: [],
  loading: false,
  error: null,
};

export const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    fetchExercisesLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchExercisesSuccess: (state, action) => {
      state.exercises = action.payload;
      state.loading = false;
    },
    fetchExercisesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addExercise: (state, action) => {
      state.exercises.push(action.payload);
    },
  },
});

export const {
  fetchExercisesLoading,
  fetchExercisesSuccess,
  fetchExercisesError,
  addExercise,
} = workoutSlice.actions;

export default workoutSlice.reducer;
