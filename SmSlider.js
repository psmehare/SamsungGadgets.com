let imags = document.querySelectorAll('.sm_grand>img')
let sm_parent = document.querySelector('.sm_parent')
let crd = document.getElementsByClassName('crd')
// let crdd = document.querySelector('.crd')
let pad = document.querySelector('.sm_parent')


function forword(){
    sm_parent.append(crd[0]);
}

function backword(){
    sm_parent.prepend(crd[crd.length-1])
}