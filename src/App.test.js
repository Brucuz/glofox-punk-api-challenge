import React from "react";
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from "redux-mock-store";
import App from "./App";


const mockStore = configureStore([]);

let store;
let component;

beforeEach(() => {
  store = mockStore({
    beerList: []
  });
  component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

it("renders without crashing", () => {
  expect(component);
});

it("renders correctly", () => {
  expect(component).toMatchSnapshot();
});
