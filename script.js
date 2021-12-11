var counter=0;

//simple function for increase and decrease number. I added if statement(number bigger then 10 or lower then -10 is with another click starting again from 0)
// and remember the position of document.getElemnt is important after the if statement otherwise its not going to work.

function changeIncrease() {
    counter = counter +1;
    if (counter>10) {
        counter=0;
    }
    document.getElementById("main-number").innerHTML = counter;
    //connecting variable counter to our Selector main-number in HTML.
}

function changeDecrease() {
    counter = counter -1;
    if (counter<-10) {
        counter=0;
    }
    document.getElementById("main-number").innerHTML = counter;
}
