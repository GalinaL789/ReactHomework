//const onionButton = document.querySelector("#onion");

// function showText() {
//     // Получаем ссылку на элемент ввода
//     var inputElement = document.getElementById('myTextarea');        
//     // Задаем текст, который хотим отобразить
//     var textToShow = 'Привет, мир!';   
//     // Устанавливаем текстовое значение в элемент ввода
//     inputElement.value = textToShow;
// }

function addText(text) {
    var textField = document.getElementById('myTextarea');
    if (textField.value === '') {
      textField.value = text;
    } else {
      textField.value += ' ' + text;
    }
  }

  function clearText()
  {
    var textField=document.getElementById('myTextarea');
    textField.value="";

  }

var syrButton=document.getElementById('syr');
syrButton.addEventListener("click", function() {
    addText("Сыр")
});
var onionButton=document.getElementById('onion');
onionButton.addEventListener("click", function() {
    addText("Лук")
});

var bekonButton=document.getElementById('bekon');
bekonButton.addEventListener("click", function() {
    addText("Бекон")
});
var salatButton=document.getElementById('salat');
salatButton.addEventListener("click", function() {
    addText("Салат")
});
var  kotletaButton=document.getElementById('kotlet');
kotletaButton.addEventListener("click", function() {
    addText('Котлета')
  });

var  bulochkaButton=document.getElementById('bulochka');
bulochkaButton.addEventListener("click", function() {
    addText('Булочка')
  });


var ketchupButton=document.getElementById('ketchup');
ketchupButton.addEventListener("click", function() {
    addText("Кетчуп")
}); 
var clearButton=document.getElementById("ochistit");
clearButton.addEventListener('click', function() {
  clearText()
});