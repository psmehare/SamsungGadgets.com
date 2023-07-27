let menu = document.querySelector('.menu')
let sec = document.querySelector('.sec')
let cross = document.querySelector('.cross>img')

menu.addEventListener('click',()=>{
    sec.style.right = '0px'
});

cross.addEventListener('click',()=>{
    sec.style.right = '-280px'
})