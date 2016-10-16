var javascriptBox = require ('./../pages/JavascriptBox');

describe("should test the adding functionality of the Javascript box", function(){

    beforeEach(function(){
        browser.get('/');
    });

    it("should verify the title of the page", function(){
        expect(browser.getTitle()).toBe(global.testData.pageTitle);
    });

    it("should verify the title of the page", function(){
        javascriptBox.addNewProject(
            global.testData.jsProject.projectName,
            global.testData.jsProject.projectWebsite,
            global.testData.jsProject.projectDescription);

        javascriptBox.searchForText(global.testData.jsProject.searchText);

        expect(javascriptBox.projectList.getText()).toContain(global.testData.jsProject.projectName);
        expect(javascriptBox.projectList.getText()).toContain(global.testData.jsProject.projectDescription);
    });


});