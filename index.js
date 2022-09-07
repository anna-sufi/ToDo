const list = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = input.value;
    item.classList.add('newItem');
    list.appendChild(item);
    input.value = '';

    item.addEventListener('click', () => {
        item.classList.add('itemDone');
    })

    item.addEventListener('dblclick', () => {
        list.removeChild(item);
    })
})