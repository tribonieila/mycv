import { MytempPage } from './app.po';

describe('mytemp App', () => {
  let page: MytempPage;

  beforeEach(() => {
    page = new MytempPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
