import { NgTmpPage } from './app.po';

describe('ng-tmp App', () => {
  let page: NgTmpPage;

  beforeEach(() => {
    page = new NgTmpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
