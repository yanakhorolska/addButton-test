// Делегирование событий
// Общий слушатель
// фильтр цели клика


const container = document.querySelector('.container');

container.addEventListener('click', onClick);

function onClick(evt) {
    console.log(evt.target);
    console.log(evt.currentTarget);
}


// Код добавления кнопок



const addButton = document.querySelector('.js-add-button');

addButton.addEventListener('click', addFunction);

let labelCounter = 1;

function addFunction(evt) {
    const btn = document.createElement('button');
    btn.textContent = `Button ${labelCounter}`;
    btn.type = 'button';
    btn.classList.add('btn');

    container.appendChild(btn);
    labelCounter += 1;

}