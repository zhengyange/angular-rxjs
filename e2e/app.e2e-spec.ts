import { AngularRxjsPage } from './app.po';

describe('angular-rxjs App', function() {
  let page: AngularRxjsPage;

  beforeEach(() => {
    page = new AngularRxjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
