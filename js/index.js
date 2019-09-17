// Your code goes here
// mouseover/mouseout events
const navItems = document.querySelectorAll('.nav a');
let scale = 1.0;
let title = 'Fun Bus';
let resizeText = '(resizing)';
let scroll = "";

navItems.forEach((element) =>
{
    element.addEventListener('mouseover', (event) => 
    {
        element.style.backgroundColor = 'blue';
        element.style.color = 'white';
    });
    
    element.addEventListener('mouseout', (event) =>
    {
        element.style.border = 'none';
        element.style.backgroundColor = 'white';
        element.style.color = '#212529';
    });
});

// keydown/keyup events
window.addEventListener('keydown', (event) =>
{
    const container1 =  document.querySelectorAll('.text-content');
    container1.forEach((element) => element.style.border = '1px solid black')
    const container2 =  document.querySelectorAll('.destination');
    container2.forEach((element) => element.style.border = '1px solid black')
});

window.addEventListener('keyup', (event) =>
{
    const container1 =  document.querySelectorAll('.text-content');
    container1.forEach((element) => { element.style.border = 'none';})
    const container2 =  document.querySelectorAll('.destination');
    container2.forEach((element) => { element.style.border = 'none'; })
});

window.addEventListener('wheel', (event) =>
{
    scale += event.deltaY * 0.001;
    bodyItem = document.querySelector('body');
    bodyItem.style.transform = 'scale(' + scale + ')'
    event.preventDefault();
});

// drag/drop events
let item;
document.addEventListener('drag', function(event) { }, false);
document.addEventListener('dragstart', (event) => item = event.target);
document.addEventListener('dragover', (event) => event.preventDefault() );
document.addEventListener('drop', (event) => 
{
    item.parentNode.removeChild(item);
    event.target.appendChild(item);
});

// load event listener
//window.addEventListener('load', (event) => alert('Page loaded successfully, thank you!'));

// focus event listener
window.addEventListener('focus', (event) =>
{
    let img = document.querySelectorAll('img');
    img.forEach((element) => element.style.border = '1px solid red');
});

// resize event listener
window.addEventListener('resize', event => 
{
    let navTitle = document.querySelector('.logo-heading');
    navTitle.textContent = title + resizeText + scroll;
    
});

// scroll event listener
window.addEventListener('scroll', event => 
{
    scroll = ' (' + window.scrollX + ',' + window.scrollY + ')';
    title.textContent = title + resizeText + scroll;
});

// select event listener
window.addEventListener('select', event => 
{
    navTitle = document.querySelector('.logo-heading');
    const text = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    navTitle.innerHTML = title + resizeText + scroll + '\nYou selected: ' + text;
    navTitle.style.fontSize = '12px';
});

window.addEventListener('dblclick', event => {
    const img = document.querySelector('.intro');
    img.style.transform = 'scale(1.3)';
    img.style.transition = 'transorm 05.s';
});

const dest = document.querySelector('.destination p');

dest.addEventListener('click', event => {
    dest.style.backgroundColor = 'lightgrey';
    //event.stopPropagation();
})






