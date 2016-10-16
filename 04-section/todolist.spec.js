var todoBox = require('./pages/TodoBox');

describe("should verify the Angular homepage", function(){

    beforeEach(function() {
        browser.get('/');
    });

    it("should verify the number of available tasks on the To Do list", function(){
        expect(todoBox.getNumberOfItems()).toBe(2);

    });

    it("should verify all the available tasks on the To Do list", function(){
        expect(todoBox.getTextOfElement(0)).toBe('learn angular');
        expect(todoBox.getTextOfElement(1)).toBe('build an angular app');
    });

    it("should add two more items to the ToDo list and tick two of them", function(){

        todoBox.setNewTodoItem('demonstrate the power of CSS selector');
        todoBox.setNewTodoItem('finish the lesson');

        expect(todoBox.getNumberOfItems()).toBe(4);
        expect(todoBox.getTextOfElement(0)).toBe('learn angular');
        expect(todoBox.getTextOfElement(2)).toBe('demonstrate the power of CSS selector');

        todoBox.clickOnTodoListItem(2);

        expect(todoBox.getFinishedItemsText(0)).toBe('learn angular');
        expect(todoBox.getFinishedItemsText(1)).toBe('demonstrate the power of CSS selector');

    });

    it("should add new task to the list by the ENTER key", function(){

        todoBox.setNewTodoItemNoClick('test the ENTER key');
        todoBox.setNewTodoItemNoClick(protractor.Key.ENTER);

        expect(todoBox.getNumberOfItems()).toBe(3);
        expect(todoBox.getTextOfElement(2)).toBe('test the ENTER key');
    });
	
});