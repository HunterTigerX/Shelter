let test2 = document.querySelector('span');
let h1 = document.querySelector("h1");
let nav_bar = document.querySelectorAll('.tttt')
let burger = document.getElementById("burger");
let logo_subtext = document.getElementById("logo_subtext");
let burger_font = document.querySelector(".burger_font");
let color_black = document.querySelectorAll('.logo_color_black');
let gold = document.querySelectorAll('.logo_color_gold');
let light_s = document.querySelectorAll('.logo_color_light_s');
let threexl_black = document.querySelectorAll('.logo_color_3xl_black');
let light_xl = document.querySelectorAll('.logo_color_light_xl');
let main_block = document.querySelector(".main_block");
let logo_header = document.querySelector(".logo_header");
let header_class = document.querySelector(".header");
let header_burger = document.querySelector(".header_burger");
let header_nav_block = document.querySelector(".header_nav_block");
let burger_font_real = document.querySelector(".burger_font_real");


let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollHeight)






const links = document.querySelectorAll('.tttt');


function burgerFunction() {
    if (header_burger.classList.contains("off")) {
        header_burger.classList.remove("off");
        header_burger.classList.add("on");
        header_burger.style.transform = "rotate(-90deg)";


    }

    else if (header_burger.classList.contains("on")) {
        header_burger.classList.remove("on");
        header_burger.classList.add("off");
        header_burger.style.transform = "none";
    }
}

