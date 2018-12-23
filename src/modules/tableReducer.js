// import * as actions from "../actions/";
import { APPLY_FILTER, REMOVE_FILTER } from "../actions/types";

const initialState = {
  // loading: false,
  // tableData: [],
  tableFilterTexts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APPLY_FILTER:
      return {
        ...state,
        tableFilterTexts: [...state.tableFilterTexts, action.payload]
      };

    case REMOVE_FILTER:
      return {
        ...state,
        tableFilterTexts: [...state.tableFilterTexts].filter(
          text => action.payload !== text
        )
      };
    // case actions.FETCH_TABLE_DATA_REQUEST:
    //   console.log("inside fetch");
    //   return {
    //     ...state,
    //     loading: true
    //   };
    // case actions.FETCH_TABLE_DATA_REQUEST:
    //   console.log("inside fetch");
    //   return {
    //     ...state,
    //     loading: true
    //   };

    // case actions.FETCH_TABLE_DATA_REQUEST_SUCCESS:
    //   console.log("after fetch success");
    //   return {
    //     ...state,
    //     loading: false,
    //     tableData: action.payload // This payload will come from the data fetched as response from API call
    //   };

    // case actions.FETCH_TABLE_DATA_REQUEST_FAILURE:
    //   console.log("after fetch failure");
    //   return {
    //     ...state,
    //     loading: false
    //   };
    default:
      return state;
  }
};
