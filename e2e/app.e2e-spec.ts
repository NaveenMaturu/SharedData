import { SendPage } from './app.po';

describe('send App', () => {
  let page: SendPage;

  beforeEach(() => {
    page = new SendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
