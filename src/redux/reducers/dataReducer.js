import { DATA, VIEW_DATA, ADD_PRODUCT } from "../types/types";

const initialState = {
  data: [],
  viewInfo: null,
  newData: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.payload,
      };
    case VIEW_DATA:
      return {
        ...state,
        viewInfo: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        newData: [...state.data?.orders, action.payload],
      };
    default:
      return state;
  }
};
