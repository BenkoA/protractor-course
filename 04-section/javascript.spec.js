var javascriptBox = require ('./pages/JavascriptBox');

describe("should test the adding functionality of the Javascript box", function(){

    beforeEach(function(){
        browser.get('/');
    });

    it("should verify the title of the page", function(){
        expect(browser.getTitle()).toBe("AngularJS — Superheroic JavaScript MVW Framework");
    });

    it("should verify the title of the page", function(){

        var projectName = 'Protractor';
        var projectWebsite = 'http://www.protractortest.org';
        var projectDescription = 'End-to-end testing framework for AngularJS applications.';

        javascriptBox.addNewProject(projectName, projectWebsite, projectDescription);

        javascriptBox.searchForText('Protractor');

        expect(javascriptBox.projectList.getText()).toContain(projectName);
        expect(javascriptBox.projectList.getText()).toContain(projectDescription);

    });


});