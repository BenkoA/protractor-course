var helloBox = require ('./pages/HelloBox');

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
        helloBox.setName(browser.params.hello.name);
        expect(helloBox.getName()).toBe('Hello '+browser.params.hello.name+'!');
    });
	
});