import { TOGGLE_SNACKBAR } from "../actions/types";

const initialState = {
  isSnackbarOpen: false,
  snackBarText: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SNACKBAR:
      return {
        ...state,
        isSnackbarOpen: action.payload ? true : false,
        snackBarText: action.payload
      };
    default:
      return state;
  }
}
