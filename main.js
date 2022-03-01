'use strict';

// 각 타이틀 h1태그 keyframes animation
const aboutText = document.querySelector(".slides")
window.addEventListener('scroll',function(){
    const value = window.scrollY
    console.log("scrollY",value);
    if(value>450){
        aboutText.style.animation = "back__slide 1.5s ease-out forwards"
    }else{
        aboutText.style.animation = "side__slide 1.5s ease-out"
    }
})


const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});

// 햄버거 메뉴창 활성화 
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',() => {
    navbarMenu.classList.toggle('open');
});


const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',() => {
    scrollIntoView('#contact');
});


const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll',()=> {
    if(window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    } else{
        arrowUp.classList.remove('visible');
    }
    
});


arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home')
});


const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null){
        return;
    }

    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});





function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}


