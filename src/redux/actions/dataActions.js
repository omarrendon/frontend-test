import { ADD_PRODUCT, DATA, VIEW_DATA } from "../types/types";
import axios from "axios";

export const fetchingData = (data) => {
  return async (dispatch) => {
    try {
      const token =
        "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ";

      const { data } = await axios.get(
        "https://eshop-deve.herokuapp.com/api/v2/orders",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer" + token,
          },
        }
      );

      dispatch(showData(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProduct = (data) => ({
  type: ADD_PRODUCT,
  payload: data,
});

export const viewData = (infoData) => ({
  type: VIEW_DATA,
  payload: infoData,
});

export const showData = (data) => ({
  type: DATA,
  payload: data,
});
