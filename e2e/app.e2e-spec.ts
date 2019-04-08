import { ClientGestionStockPage } from './app.po';

describe('client-gestion-stock App', function() {
  let page: ClientGestionStockPage;

  beforeEach(() => {
    page = new ClientGestionStockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
