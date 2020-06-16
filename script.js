const container = document.querySelector('.container');
const frames = document.getElementsByClassName('.frames');



function defaultRows(rows, cols){
    //setting the rows being passed
    container.style.setProperty('--grid-rows', rows);//all done through css
    //setting the columns being passed
    container.style.setProperty('--grid-cols', cols)
    for(c = 0 ; c < (rows*cols) ; c++){
        let cell = document.createElement('button');
        cell.innerText = (c+1);
        container.appendChild(cell).className = "grid-item";
        
        const buttons = document.querySelectorAll('button');//selecting all element button
        buttons.forEach((button) => {//create var button for each buttons found
            button.addEventListener('mouseover', function(){//create an event for the button
                this.style.background = 'black';//set background to black when hovered over
            });
        });

    }
}
function updateRows(rows, cols){
    
}

defaultRows(16,16);
