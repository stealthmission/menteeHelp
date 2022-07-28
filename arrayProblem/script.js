let items = [];

function addItem(){
    let template = items.map(item => `<li>${item}</li>`).join('\n');
    document.querySelector('ul').innerHTML = template;
}
addItem();
let btnAdd = document.getElementById('btn');
let input = document.getElementById('tbox');
btnAdd.addEventListener('click', () =>{
    items.push(input.value);
    input.value = '';
    addItem();        
});
console.log(items);