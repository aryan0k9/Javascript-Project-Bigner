let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

let res;

input1.addEventListener('input', function(){
    let cel = this.value;
    res = (cel * 9/5 + 32);
    input2.value = res;
})

input2.addEventListener('input',function(){
    let far = this.value;
    res = (((far-32)*5)/9);
    input1.value = res;
})