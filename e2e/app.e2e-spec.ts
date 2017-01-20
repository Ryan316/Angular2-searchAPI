import { MySearchAppPage } from './app.po';

describe('my-search-app App', function() {
  let page: MySearchAppPage;

  beforeEach(() => {
    page = new MySearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
