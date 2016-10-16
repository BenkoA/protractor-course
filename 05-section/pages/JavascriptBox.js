var JavascriptBox = function(){

    this.searchBar = element(by.model('projectList.search'));

    this.addNewProjectIcon = element(by.xpath("//div[@module='project']//thead//th[3]"));
    this.projectNameInput = element(by.model('editProject.project.name'));
    this.projectWebsiteInput = element(by.model('editProject.project.site'));
    this.projectDescriptionInput = element(by.model('editProject.project.description'));
    this.projectSaveButton = element(by.buttonText('Save'));

    this.projectList = element(by.repeater("project in projectList.projects | filter:projectList.search | orderBy:'name'"));

    this.searchForText = function(text){
        return this.searchBar.sendKeys(text);
    };

    this.addNewProject = function(name, website, description){
        this.addNewProjectIcon.click();

        this.projectNameInput.sendKeys(name);
        this.projectWebsiteInput.sendKeys(website);
        this.projectDescriptionInput.sendKeys(description);
        this.projectSaveButton.click();
    };


};
module.exports = new JavascriptBox();