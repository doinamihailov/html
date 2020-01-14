/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/
document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking the sunflowers!');
} 
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sunflowers.jpg') {
      myImage.setAttribute ('src','images/sunflowers2.jpg');
    } else {
      myImage.setAttribute ('src','images/sunflowers.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'find out about them, ' + myName;
      }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'find out about them, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

/*
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

let myVariable;
let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  console.log('Yay, I love chocolate ice cream!');    
} else {
  console.log('Awwww, but chocolate is my favorite...');    
}

console.log(multiply(4, 7));
*/