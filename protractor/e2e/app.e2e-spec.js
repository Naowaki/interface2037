describe('projet-agile App', function() {

  beforeEach(function() {
    return browser.get('/');
  });

  it('GoodTitle', function() {
    expect(browser.getTitle()).toEqual('ProjetAgile');
  });

  it('Go ask a question page', function() {
      element(by.buttonText('Poser une question')).click();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "asking");
      element(by.buttonText('Retour à l\'accueil')).click();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "main");
  });

  it('Go list question page', function() {
      element(by.buttonText('Liste des questions')).click();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "questions");
      element(by.buttonText('Retour à l\'accueil')).click();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "main");
  });

  it('Ask a question', function() {
      element(by.buttonText('Liste des questions')).click();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "questions");
      element(by.id("md-input-1")).sendKeys("Coucou");
      element(by.buttonText('Envoyer')).click();
      expect(element(by.id("response")).isPresent()).toBeTruthy();
  });


});
