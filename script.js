const form = document.getElementById('nameForm')
const input = document.getElementById('nameInput')
const heading = document.getElementById('heading')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    heading.textContent = "Hello " + input.value +"!"
})

let val = 0;
const redBox = document.getElementById("red-col");
const defaultRedColor = getComputedStyle(redBox).backgroundColor;
const defaultRedCol = getComputedStyle(redBox).color;

redBox.addEventListener("click", (e) => {
  e.preventDefault();
  if (val === 0) {
    redBox.style.backgroundColor = "red"; 
    redBox.style.color="white"
    val = 1;
  } else {
    redBox.style.backgroundColor = defaultRedColor; 
    redBox.style.color = defaultRedCol;
    val = 0;
  }
});


let val2 = 0;
const blueBox = document.getElementById("blue-col");
const defaultBlueColor = getComputedStyle(blueBox).backgroundColor;
const defaultBlueCol = getComputedStyle(blueBox).color;

blueBox.addEventListener("click", (e) => {
  e.preventDefault();
  if (val2 === 0) {
    blueBox.style.backgroundColor = "blue"; 
    blueBox.style.color = "white";
    val2 = 1;
  } else {
    blueBox.style.backgroundColor = defaultBlueColor; 
    blueBox.style.color=defaultBlueCol;
    val2 = 0;
  }
});

let val3 = 0;
const greenBox = document.getElementById("green-col");
const defaultGreenColor = getComputedStyle(greenBox).backgroundColor;
const defaultGreenCol = getComputedStyle(greenBox).color;

greenBox.addEventListener("click", (e) => {
  e.preventDefault();
  if (val3 === 0) {
    greenBox.style.backgroundColor = "green";
    greenBox.style.color = "white";

    val3 = 1;
  } else {
    greenBox.style.backgroundColor = defaultGreenColor;
    greenBox.style.color=defaultGreenCol;
    val3 = 0;
  }
});

let val4 = 0;
const yellowBox = document.getElementById("yellow-col");
const defaultYellowColor = getComputedStyle(yellowBox).backgroundColor;
const defaultYellowCol = getComputedStyle(yellowBox).color;

yellowBox.addEventListener("click", (e) => {
  e.preventDefault();
  if (val4 === 0) {
    yellowBox.style.backgroundColor = "yellow";
    yellowBox.style.color = "white";
    val4 = 1;
  } else {
    yellowBox.style.backgroundColor = defaultYellowColor;
    yellowBox.style.color=defaultYellowCol;
    val4 = 0;
  }
});

