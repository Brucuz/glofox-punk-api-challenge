import punkApi from "./punk.service";

it("get a random beer", async () => {
    const randomBeer = await punkApi.getRandomBeer();
    expect(randomBeer.id).toBeTruthy();
});

it("get a non alcoholic beer", async () => {
    const randomBeer = await punkApi.getRandomAlcoholFreeBeer();
    expect(randomBeer.abv).toBeLessThan(0.51);
});

it("get get a list of beer by name", async () => {
    const beerList = await punkApi.getBeers({beer_name: "punk"});
    expect(beerList.length).toBeGreaterThan(0);
});

it("get get a list of beer by brewed before", async () => {
    const beerList = await punkApi.getBeers({brewed_before: new Date()});
    expect(beerList.length).toBeGreaterThan(0);
});
