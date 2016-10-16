var TodoBox = function(){

    this.toDoListItems = element.all(by.repeater("todo in todoList.todos"));
    this.finishedToDos = element.all(by.css("span.done-true"));
    this.toDoListInput = element(by.css('input[placeholder="add new todo here"]'));
    this.toDoListButton = element(by.css('input[value="add"]'));

    this.getNumberOfItems = function(){
        return this.toDoListItems.count();
    };

    this.getTextOfElement = function(number){
        return this.toDoListItems.get(number).getText();
    };

    this.setNewTodoItem = function(newText){
        this.toDoListInput.sendKeys(newText);
        this.toDoListButton.click();
    };

    this.setNewTodoItemNoClick = function(newText){
        this.toDoListInput.sendKeys(newText);
    };

    this.clickOnTodoListItem = function(number){
        this.toDoListItems.get(number).click();
    };

    this.getFinishedItemsText = function(number){
        return this.finishedToDos.get(number).getText();
    };

};
module.exports = new TodoBox();