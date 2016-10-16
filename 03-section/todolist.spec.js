describe("should verify the Angular homepage", function(){

    beforeEach(function(){
        browser.get('/');
    });

    it("should verify the number of available tasks on the To Do list", function(){
        var toDoListItems = element.all(by.repeater("todo in todoList.todos"));
        expect(toDoListItems.count()).toBe(2);

    });

    it("should verify all the available tasks on the To Do list", function(){
        var toDoListItems = element.all(by.repeater("todo in todoList.todos"));

        expect(toDoListItems.first().getText()).toBe('learn angular');
        expect(toDoListItems.last().getText()).toBe('build an angular app');

        expect(toDoListItems.get(0).getText()).toBe('learn angular');
        expect(toDoListItems.get(1).getText()).toBe('build an angular app');
    });

    it("should add two more items to the ToDo list and tick two of them", function(){
        var toDoListInput = element(by.css('input[placeholder="add new todo here"]'));
        var toDoListItems = element.all(by.repeater("todo in todoList.todos"));
        var toDoListButton = element(by.css('input[value="add"]'));

        toDoListInput.sendKeys('demonstrate the power of CSS selector');
        toDoListButton.click();

        toDoListInput.sendKeys('finish the lesson');
        toDoListButton.click();

        expect(toDoListItems.count()).toBe(4);
        expect(toDoListItems.get(0).getText()).toBe('learn angular');
        expect(toDoListItems.get(2).getText()).toBe('demonstrate the power of CSS selector');

        toDoListItems.get(2).click();

        var finishedToDos = element.all(by.css("span.done-true"));
        expect(finishedToDos.get(0).getText()).toBe('learn angular');
        expect(finishedToDos.get(1).getText()).toBe('demonstrate the power of CSS selector');

    });

    it("should add new task to the list by the ENTER key", function(){
        var toDoListInput = element(by.css('input[placeholder="add new todo here"]'));
        var toDoListItems = element.all(by.repeater("todo in todoList.todos"));

        toDoListInput.sendKeys('test the ENTER key');
        toDoListInput.sendKeys(protractor.Key.ENTER);

        expect(toDoListItems.count()).toBe(3);
        expect(toDoListItems.get(2).getText()).toBe('test the ENTER key');
    });
	
});