let getDivs = document.querySelectorAll('.explore_titles>div');
let getImg = document.querySelector('.explore_img>img');
let sub_titles = document.querySelectorAll('.sub_titles>div')
let getouterwidth = window.outerWidth
// console.log(sub_titles)

if(getouterwidth > 910){
    function toDisplay(idd){
        var imgArray = ['Img/pics/1.webp','Img/pics/2.webp','Img/pics/3.jpg','Img/pics/4.jpg','Img/pics/5.jpg']
        getDivs.forEach((data,id)=>{
            if (idd == id){
                data.style.height = '115px'
                data.style.borderTop = '1px solid black'
                data.childNodes[3].style.display = 'block'
                getImg.src = imgArray[id]
            }
    
            else{
                data.style.height = '80px'
                data.childNodes[3].style.display = 'none'
                data.style.borderTop = 'none'
            }
        })
    }
    getDivs.forEach((data,id)=>{
        data.addEventListener('mouseover',()=>{
            toDisplay(id)
        })
    })
}

else{

    imgArray = ['Img/pics/1.webp','Img/pics/2.webp','Img/pics/3.jpg','Img/pics/4.jpg','Img/pics/5.jpg']

    function getByDot(id){
        getImg.src = imgArray[id]
        getDivs.forEach((data,idd)=>{
            if(id == idd){
                data.style.display = 'block'
                data.childNodes[3].style.display = 'block'
            }
            else{
                data.style.display = 'none'
                
            }
        })
    }

    sub_titles.forEach((data,id)=>{
        data.addEventListener('click',()=>{
            getByDot(id)
        })
    })
}
