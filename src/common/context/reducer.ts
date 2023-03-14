import { ActionType, StoreType } from "../../types";
import { ACTION_TYPES } from "./action-types";

export const initialState: StoreType = {
  banks: {
    loading: false,
    data: [],
  },

  fiats: {
    loading: false,
    data: [],
  },
};

const reducer = (state = initialState, action: ActionType): StoreType => {
  console.log(action);
  switch (action.type) {
    case ACTION_TYPES.FETCH_BANKS:
      return {
        ...state,
        banks: {
          ...state.banks,
          loading: true,
        },
      };

    case ACTION_TYPES.FETCH_BANKS_SUCCESS:
      return {
        ...state,
        banks: {
          ...state.banks,
          data: action.payload,
          loading: false,
        },
      };

    case ACTION_TYPES.FETCH_FIATS:
      return {
        ...state,
        fiats: {
          ...state.fiats,
          loading: true,
        },
      };

    case ACTION_TYPES.FETCH_FIATS_SUCCESS:
      return {
        ...state,
        fiats: {
          ...state.fiats,
          data: action.payload,
          loading: false,
        },
      };

    default:
      return state;
  }
};

export default reducer;
