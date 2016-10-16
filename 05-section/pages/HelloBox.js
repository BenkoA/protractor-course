var HelloBox = function() {
    this.nameInput = element(by.model('yourName'));
    this.nameOutput = element(by.css('h1[class="ng-binding"]'));

    this.setName = function (name) {
      this.nameInput.sendKeys(name);
    };

    this.getName = function() {
        return this.nameOutput.getText();
    };
};

module.exports = new HelloBox();