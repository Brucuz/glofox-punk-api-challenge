import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import SearchResuls from "./SearchResults";

const mockStore = configureStore([]);

let store;
let component;

beforeEach(() => {
  store = mockStore({
    beerList: [
      {
        id: 63,  
        name: "Sunk Punk",
        description:
          "It's rumoured just a drop can calm the fiercest of storms. A balance of sweet, salt and savoury, citrus, spruce and caramel. Fermented at the bottom of the North Sea, which just so happens to be the perfect temperature for lagers to ferment.",
        image_url: "https://images.punkapi.com/v2/63.png"
      }
    ]
  });
  component = renderer.create(
    <Provider store={store}>
      <SearchResuls />
    </Provider>
  );
});

it("renders correctly", () => {
  expect(component).toMatchSnapshot();
});
