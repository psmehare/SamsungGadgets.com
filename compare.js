// ******************************** 00 starts**********************************

let select = document.querySelectorAll('.select>div');
var img = document.querySelector('.imgg');
var num = document.querySelector('#hid')

console.log(num.value);


console.log(num);
var count = 1
var imgA = ''
function silder(){

    var numm = num.value
    console.log(numm)
    if(numm == 0){
        imgA = ['Img/pics/s22black4.webp','Img/pics/s22black1.webp','Img/pics/s22black2.webp','Img/pics/s22black3.webp']
    }

    else if(numm == 1){
        imgA = ['Img/pics/s22brown5.webp','Img/pics/s22brown2.webp','Img/pics/s22brown3.webp','Img/pics/s22brown4.webp']
    }

    else{
        imgA = ['Img/pics/s22green5.webp','Img/pics/s22green2.webp','Img/pics/s22green3.webp','Img/pics/s22green4.webp']
        console.log('hahaha')
    }

    document.querySelector('.imgg').src = imgA[count]

    if(count<imgA.length-1){
        count++
    }
    else{
        count = 0
    }
}


function toBeSlide(num){

    var imgAr = ['Img/pics/s22black4.webp','Img/pics/s22brown5.webp','Img/pics/s22green5.webp']
    img.src = imgAr[num]


}

var namee;
img.addEventListener('mouseover',()=>{
   namee = setInterval(silder,1000);

})

img.addEventListener('mouseleave',()=>{
    clearInterval(namee)
})





select.forEach((data,id)=>{
    data.addEventListener('click',()=>{
        toBeSlide(id)
        num.value = id

    })
})


// ******************************** 00 ends**********************************



// ******************************** 01 starts**********************************

let select1 = document.querySelectorAll('.select1>div');
let img1 = document.querySelector('.img1>img')
let hid1 = document.querySelector('#hid1')

var inc = 1;
function firstSlide(){
    let number = hid1.value
    console.log(number)

    if(number == 0){
        ar1 = ['Img/pics/s22+black1.webp','Img/pics/s22+black2.webp','Img/pics/s22+black3.webp']
    }

    else if(number == 1){
        ar1 = ['Img/pics/s22+white1.webp','Img/pics/s22+white2.webp','Img/pics/s22+white3.webp','Img/pics/s22+white4.webp']
    }
    else{
        ar1 = ['Img/pics/s22+green1.webp','Img/pics/s22+green2.webp','Img/pics/s22+green3.webp']
    }


    img1.src = ar1[inc]

    if(inc<ar1.length-1){
        inc++
    }
    else{
        inc = 0
    }

}

var int = '';
img1.addEventListener('mouseover',()=>{
    int = setInterval(firstSlide,1000)
});

img1.addEventListener('mouseleave',()=>{
    clearInterval(int)
});


var FirstArray = '';
function first(id){
    FirstArray = ['Img/pics/s22+black1.webp','Img/pics/s22+white1.webp','Img/pics/s22+green1.webp']

    img1.src = FirstArray[id]

}

select1.forEach((data,id)=>{
    data.addEventListener('click',()=>{
        first(id)
        hid1.value = id
    })
})

// ******************************** 01 ends**********************************

