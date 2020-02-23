import React from "react";
import renderer from "react-test-renderer";
import HighlightedContent from "./HighlightedContent";

let component;

beforeEach(() => {
  component = renderer.create(<HighlightedContent />);
});

it("renders correctly", () => {
  expect(component).toMatchSnapshot();
});

it("load a random beer",  async () =>{ 
    const instance = component.getInstance();
    await instance.loadRandomBeer(true);
    expect(instance.state.currentBeer.id).toBeTruthy();
});

it("load a random alcohol free beer",  async () =>{ 
    const instance = component.getInstance();
    await instance.loadRandomBeer(false);
    expect(instance.state.currentBeer.id).toBeTruthy();
    expect(instance.state.currentBeer.abv).toBeLessThan(0.51);
});
