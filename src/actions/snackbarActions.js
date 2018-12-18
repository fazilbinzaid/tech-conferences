import { TOGGLE_SNACKBAR } from "./types";

export const toggleSnackbar = text => dispatch => {
  dispatch({
    type: TOGGLE_SNACKBAR,
    payload: text
  });
};
