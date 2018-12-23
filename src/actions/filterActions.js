import { APPLY_FILTER, REMOVE_FILTER } from "./types";

export const applyFilter = word => dispatch => {
  dispatch({
    type: APPLY_FILTER,
    payload: word
  });
};

export const removeFilter = filterText => dispatch => {
  dispatch({
    type: REMOVE_FILTER,
    payload: filterText
  });
};
