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
      element(by.buttonText('Retrouver une question')).click();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "questions");
      element(by.buttonText('Retour à l\'accueil')).click();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "main");
  });

  it('Ask a question', function() {
      element(by.buttonText('Poser une question')).click();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "questions");
      element(by.id("md-input-5")).sendKeys("Coucou");
      element(by.buttonText('Envoyer')).click();
      expect(element(by.id("response")).isPresent()).toBeTruthy();
  });

  it('Find a question', function() {
      element(by.buttonText('Retrouver une question')).click();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "questions");
      element(by.id("md-input-7")).sendKeys("1");
      element(by.buttonText('Obtenir la réponse')).click();
      expect(element(by.id("question_reponse")).isPresent()).toBeTruthy();
  });


});
