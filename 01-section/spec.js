describe("should verify the Angular homepage", function(){

	it("should verify the title of the page", function(){
		browser.get("https://angularjs.org/");
		expect(browser.getTitle()).toBe("AngularJS — Superheroic JavaScript MVW Framework");
	});
	
});