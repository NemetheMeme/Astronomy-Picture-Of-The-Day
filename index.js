

const tryItButton = document.querySelector('.try-it');
tryItButton.addEventListener('click', () => {

    const text = document.querySelector('.main-wrapper-title p');
    const block = document.querySelector('.main-wrapper-title');
    const gradient = document.querySelector('.main-wrapper-gradient');
   const main = document.querySelector('.main-wrapper')

    const arr = [text, block, tryItButton];
    for(elem of arr){
        elem.classList.add('is-inactive');
    }

    [submitButton, searchInput] = createSearchBox(gradient);

    submitButton.addEventListener('click', () => {
        main.removeChild(gradient);
    });
    
    submitButton.addEventListener('click',  () => {
        const searchValue = searchInput.value;
        createTemplate(main, searchValue);
    })
});
