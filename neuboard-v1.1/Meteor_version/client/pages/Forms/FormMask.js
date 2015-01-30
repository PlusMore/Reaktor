Template.FormMask.rendered = function () {
  this.$("#input1").mask("99/99/9999");
  this.$("#input2").mask('(999) 999-9999');
  this.$("#input3").mask("(999) 999-9999? x99999");
  this.$("#input4").mask("99-9999999");
  this.$("#input5").mask("999-99-9999");
  this.$("#input6").mask("a*-999-a999");
};