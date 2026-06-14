let test2 = document.querySelector('span');
let nav_bar = document.querySelectorAll('.tttt')

parent.onmouseover = parent.onmouseout = parent.onmousemove = handler;

function handler(event) {
    if (event.target.classList.contains('test')) {
        test2.classList.remove('test');
    }
    if (event.target.classList.contains('tttt')) {
        test2.classList.remove('test');
    }
}



