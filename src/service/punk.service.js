import axios from "axios";
import _ from "lodash";

const MAX_RANDOM_ATTEMPT = 10;
const ERROR_MSG = {
  error: "Error during api call"
};

const NO_BEERS_FOUND = {
  error: "No beers found"
};

const punkApi = axios.create({
  baseURL: "https://api.punkapi.com/v2/"
});

const getRandomBeer = async () => {
  let attemptCounter = 0;
  while (attemptCounter < MAX_RANDOM_ATTEMPT) {
    try {
      const randomBeer = (await punkApi.get("beers/random/")).data[0];
      if (
        !_.isEmpty(randomBeer.image_url) &&
        !_.isEmpty(randomBeer.description)
      ) {
        return randomBeer;
      }
    } catch (err) {
      return ERROR_MSG;
    }
  }
  return ERROR_MSG;
};

const getRandomAlcoholFreeBeer = async () => {
  try {
    const alcoholFreeBeers = await punkApi.get("beers/", {
      params: {
        abv_lt: 0.51
      }
    });
    return _.chain(alcoholFreeBeers.data)
      .filter(
        beer => !_.isEmpty(beer.image_url) && !_.isEmpty(beer.description)
      )
      .sample()
      .value();
  } catch (err) {
    return ERROR_MSG;
  }
};

const getBeers = async params => {
  try {
    const beers = await punkApi.get("beers/", {
      params
    });
    return beers.data.length > 0 ? beers.data : NO_BEERS_FOUND;
  } catch (err) {
    return ERROR_MSG;
  }
};

export default {
  getRandomBeer,
  getRandomAlcoholFreeBeer,
  getBeers
};
