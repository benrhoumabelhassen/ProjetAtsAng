import { MiniProjetPage } from './app.po';

describe('mini-projet App', () => {
  let page: MiniProjetPage;

  beforeEach(() => {
    page = new MiniProjetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
