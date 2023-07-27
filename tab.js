let secc = document.querySelectorAll('.secc');
var hid = document.querySelector('#hid');
let sec_img = document.querySelector('#sec_img');

var arry = []
var toBeIncrement = 1
function TabSlide(){
    let getTabValue = hid.value;
    console.log(getTabValue);
    if(getTabValue == 0){
        arry = ['img/pics/tab_Wall_black.webp','img/pics/black_tab0.webp','img/pics/black_tab2.webp','img/pics/black_tab3.webp']
    }

    if(getTabValue == 1){
        arry = ['img/pics/tab_Wall_white.webp','img/pics/white_tab1.webp','img/pics/white_tab2.webp','img/pics/white_tab3.webp']
    }

    if(getTabValue == 2){
        arry = ['img/pics/tab_Wall_pink.webp','img/pics/pink_tab1.webp','img/pics/pink_tab2.webp','img/pics/pink_tab3.webp']
    }

    sec_img.src = arry[toBeIncrement]

    if (toBeIncrement < arry.length-1){
        toBeIncrement++
    }

    else{
        toBeIncrement = 0
    }
}

var time = ''
sec_img.addEventListener('mouseover',()=>{
    time = setInterval(TabSlide,1000);
});

sec_img.addEventListener('mouseleave',()=>{
    clearInterval(time)
})

var EmpptyArray = ['img/pics/tab_Wall_black.webp','img/pics/tab_Wall_white.webp','img/pics/tab_Wall_pink.webp']
secc.forEach((data,ids)=>{
    data.addEventListener('click',()=>{
        sec_img.src = EmpptyArray[ids]
        hid.value = ids
    })
})

