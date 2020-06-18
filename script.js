const container = document.querySelector('.container');
const resize = document.querySelector('.resize');
const erase = document.querySelector('.erase');
const color = document.querySelector('.color');
let number = 16;//default size

//resizing the grids
resize.addEventListener('click', function () {
    //need to reset grid size or else it would keep 16 and add to it
    container.innerHTML = "";
    const result = prompt('What size do you want?');
    if (!(/[0-9]/.test(result))) {//regex checking for numbers
        result = prompt('Enter a valid size');
    }
    else {
        createGrids(result);
    }
});
//generating random colors
function getRandomColors() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

function createGrids(number) {
    container.style.gridTemplateColumns = `repeat(${number}, auto)`;
    for (c = 0; c < (number * number); c++) {
        const frame = document.createElement('button');
        frame.style.justifyContent = 'center';
        frame.style.alignItems = "center";
        frame.style.border = "1px solid black";
        container.appendChild(frame).className = "grid-item";

        const buttons = document.querySelectorAll('.grid-item');//selecting all element button
        buttons.forEach((button) => {//create var button for each buttons found
            button.addEventListener('mouseover', function () {//create an event for the button
                this.style.background = getRandomColors();//set background to black when hovered over
            });
        });

        erase.addEventListener('click', function () {
            buttons.forEach((button) => {//create var button for each buttons found
                button.addEventListener('mouseover', function () {//create an event for the button
                    this.style.background = 'white';//set background to black when hovered over
                });
            });
        })
        color.addEventListener('click', function () {
            buttons.forEach((button) => {//create var button for each buttons found
                button.addEventListener('mouseover', function () {//create an event for the button
                    this.style.background = getRandomColors();//set background to black when hovered over
                });
            });
        })
    }

}


createGrids(number);


