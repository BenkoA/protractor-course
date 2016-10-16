describe("should verify the Angular homepage", function(){

    beforeEach(function(){
        browser.get('/');
    });

	it("should verify the title of the page", function(){
		expect(browser.getTitle()).toBe("AngularJS — Superheroic JavaScript MVW Framework");
	});

	it("should verify the title of the twitter button", function(){

        var twitterButton = element(by.id('twitter-widget-0'));
        expect(twitterButton.getAttribute('title')).toBe('Twitter Follow Button');
    });

    it("should add new name to the field", function(){
        element(by.model('yourName')).sendKeys(browser.params.hello.name);
        expect(element(by.css('h1[class="ng-binding"]')).getText()).toBe('Hello '+browser.params.hello.name+'!');
    });
	
});