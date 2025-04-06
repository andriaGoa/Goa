const firstBox = document.querySelector('box');
firstBox.style.backgroundColor = 'blue';
firstBox.style.borderRadius = '10px';

const allBoxes = document.querySelectorAll('box');
allBoxes.forEach((box, index) => {
  box.style.border = '2px solid black';
  box.textContent = index + 1;
});


const parentDiv = document.createElement('div');
parentDiv.style.display = 'flex';
parentDiv.style.flexDirection = 'column';
parentDiv.style.justifyContent = 'space-between';
parentDiv.style.alignItems = 'center';
parentDiv.style.height = '250px';
parentDiv.style.width = '200px';
parentDiv.style.marginTop = '50px';
parentDiv.style.border = '2px solid gray';
parentDiv.style.padding = '10px';
const childDiv1 = document.createElement('div');
childDiv1.style.backgroundColor = 'red';
childDiv1.style.width = '100%';
childDiv1.style.height = '100px';
const childDiv2 = document.createElement('div');
childDiv2.style.backgroundColor = 'green';
childDiv2.style.width = '100%';
childDiv2.style.height = '100px';
parentDiv.appendChild(childDiv1);
parentDiv.appendChild(childDiv2);
document.body.appendChild(parentDiv);