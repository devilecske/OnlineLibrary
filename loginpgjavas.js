// JavaScript Document
var inputs = document.getElementsByTagName('input');

for (var i = 0, len = inputs.length; i < len; i++) {
    input = inputs[i];
    input.onmouseover = function(){
        this.setAttribute('data-orig-image',this.getAttribute('src'));
        this.src = this.getAttribute('data-alt-image');
    };
    input.onmouseout = function(){
        this.src = this.getAttribute('');
    };
}


$('.input-daterange').datepicker({ minViewMode: 2, format: 'yyyy' });