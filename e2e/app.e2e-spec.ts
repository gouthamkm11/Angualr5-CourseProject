import { RedoprojectPage } from './app.po';

describe('redoproject App', function() {
  let page: RedoprojectPage;

  beforeEach(() => {
    page = new RedoprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
