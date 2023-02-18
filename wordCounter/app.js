let textArea = document.getElementsByTagName('textarea');
let word = document.getElementById('word');
let character = document.getElementById('character');

textArea[0].addEventListener('input',function(){
    let wor = (((textArea[0].value).trim()).split(' '));
    let cleanList = wor.filter(function(elm){
        return elm != ""
    })
    word.innerText = cleanList.length;

    let char = textArea[0].value.length;
    character.innerText = char;
})