import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import SearchBar from "./SearchBar";

const mockStore = configureStore([]);

let store;
let component;

beforeEach(() => {
  store = mockStore({
    beerList: []
  });

  store.dispatch = jest.fn();

  component = renderer.create(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
});

it("renders correctly", () => {
  expect(component).toMatchSnapshot();
});

it("dispatch action search_beer", async () => {
  renderer.act(() => {
    component.root.findByType("form").props.onSubmit(new Event("submit"));
  });

  expect(store.dispatch).toHaveBeenCalledTimes(1);
});
