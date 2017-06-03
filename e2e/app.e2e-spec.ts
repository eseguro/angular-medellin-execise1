import { MiProyecto2Page } from './app.po';

describe('mi-proyecto2 App', () => {
  let page: MiProyecto2Page;

  beforeEach(() => {
    page = new MiProyecto2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
