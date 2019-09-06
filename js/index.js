// Your code goes here
// mouseover/mouseout events
const navItems = document.querySelectorAll('.nav a');
scale = 1.0;

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

// window.addEventListener('wheel', (event) =>
// {
//     scale += event.deltaY * 0.001;
//     bodyItem = document.querySelector('body');
//     bodyItem.style.transform = 'scale(' + scale + ')'
// });

let item;
document.addEventListener('drag', function(event) { }, false);
document.addEventListener('dragstart', (event) => item = event.target);
document.addEventListener('drop', (event) => 
{
    item.parentNode.removeChild(item);
    event.target.appendChild(item);
})

