//Here I do the ham button for the menu

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.menu')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


//This code is to get the entire date
let current_date = new Date();

//This code is to set in that class in the HTML the full year
document.querySelector(".year").innerHTML = `${current_date.getFullYear()}`

//This code is to set in that class into the HTML the last modification date
document.querySelector(".updated").innerHTML = `last updated: ${document.lastModified}`