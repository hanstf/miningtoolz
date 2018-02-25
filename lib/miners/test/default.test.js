import Default from '../default';

describe('miner grabber', () => {
    test("able to download latest claymore version from website path given", function(){
        new Default("claymore", "latest", "https://claymore.com").download();
    });
});