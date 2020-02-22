
import punkApi from "../service/punk.service";

export const fetchBeers = (params) => async dispatch => {
  const response = await punkApi.getBeers(params);

  dispatch({
    type: "FETCH_BEERS",
    payload: response
  });
};