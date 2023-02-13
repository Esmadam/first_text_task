const select =  document.querySelector('#choose');
const option = document.querySelectorAll('select > option');


const input = document.querySelector('input');
const button = document.querySelector('.button');


select.addEventListener('click', () => {
    const value = select.value;
    let text = select.options[select.selectedIndex].text;

    input.value = text;
});

button.addEventListener('click', () => {
    let selected = select.options[select.selectedIndex];
    selected.text = input.value;
    
})
