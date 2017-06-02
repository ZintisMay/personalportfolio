import { PersonalportfolioPage } from './app.po';

describe('personalportfolio App', () => {
  let page: PersonalportfolioPage;

  beforeEach(() => {
    page = new PersonalportfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
