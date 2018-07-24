import { WineAppPage } from './app.po';

describe('wine-app App', function() {
  let page: WineAppPage;

  beforeEach(() => {
    page = new WineAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
