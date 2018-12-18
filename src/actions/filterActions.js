import { APPLY_FILTER } from "./types";

export const applyFilter = filterText => dispatch => {
  dispatch({
    type: APPLY_FILTER,
    payload: filterText
  });
};
