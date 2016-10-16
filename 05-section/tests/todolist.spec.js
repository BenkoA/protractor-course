var todoBox = require('./../pages/TodoBox');

describe("should verify the Angular homepage", function(){

    beforeEach(function() {
        browser.get('/');
    });

    it("should verify the number of available tasks on the To Do list", function(){
        expect(todoBox.getNumberOfItems()).toBe(2);

    });

    it("should verify all the available tasks on the To Do list", function(){
        expect(todoBox.getTextOfElement(0)).toBe(global.testData.todoList.firstItem);
        expect(todoBox.getTextOfElement(1)).toBe(global.testData.todoList.buildAppItem);
    });

    it("should add two more items to the ToDo list and tick two of them", function(){

        todoBox.setNewTodoItem(global.testData.todoList.firstNewItem);
        todoBox.setNewTodoItem(global.testData.todoList.secondNewItem);

        expect(todoBox.getNumberOfItems()).toBe(4);
        expect(todoBox.getTextOfElement(0)).toBe(global.testData.todoList.firstItem);
        expect(todoBox.getTextOfElement(2)).toBe(global.testData.todoList.firstNewItem);

        todoBox.clickOnTodoListItem(2);

        expect(todoBox.getFinishedItemsText(0)).toBe(global.testData.todoList.firstItem);
        expect(todoBox.getFinishedItemsText(1)).toBe(global.testData.todoList.firstNewItem);

    });

    it("should add new task to the list by the ENTER key", function(){

        todoBox.setNewTodoItemNoClick('test the ENTER key');
        todoBox.setNewTodoItemNoClick(protractor.Key.ENTER);

        expect(todoBox.getNumberOfItems()).toBe(3);
        expect(todoBox.getTextOfElement(2)).toBe('test the ENTER key');
    });
	
});