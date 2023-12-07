const input = document.querySelector('#nav-toggle');
const nav = document.querySelector('nav ul');
const anchors = document.querySelectorAll('a');

function checkAll(){
    input.checked = false;
    console.log(input)
}


window.onload = function() {
    window.addEventListener('resize', checkAll, false);
    nav.addEventListener('click', checkAll, false);
    console.log('clicked');
}
anchors.forEach((e) => {
    e.addEventListener('click', checkAll, false);
    console.log('clicked');

});

