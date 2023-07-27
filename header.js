let menu = document.getElementById('menu')
let hidden = document.querySelector('.hidden')
let header_two = document.querySelector('.header_two')
let cross = document.getElementById('cross')
let getouterwidth = window.outerWidth     
// console.log(getouterwidth)
menu.addEventListener('click',()=>{
    hidden.style.display = 'block'
    header_two.style.right = '0px'
});

cross.addEventListener('click',()=>{
    hidden.style.display = 'none'
    header_two.style.right = '-300px'
    
});


let main_header_one_ul_li = document.querySelectorAll('.main_header_one_ul>li')
let search_left_arrow = document.querySelector('.search_left_arrow')
let none = document.querySelector('#none')
let leftt = document.querySelector('#leftt')
let rightt = document.querySelector('#rightt')
let mobile_div_sec_parent_div = document.querySelectorAll('.mobile_div_sec_parent>div')

// Mini Bar starts

let mini_bar_two_ul_li = document.querySelectorAll('.mini_bar_two ul li')
let mini_bar_two_ul_lii = document.getElementsByClassName('li')
let mini_bar_two_ul = document.querySelector('.mini_bar_two ul')
let mini_bar_two = document.querySelector('.mini_bar_two')


// Mini Bar Ends


// Banner Starts

let banner = document.querySelector('.banner_slider_parent')
let banner_div = document.querySelectorAll('.com')
let banner_icons = document.querySelectorAll('.banner_icons div')
let banner_slider_parent = document.querySelector('.banner_slider_parent')


// Banner Ends

// SmSlider STarts

let smSlider = document.querySelector('.smSlider')
let smSlider_child = document.getElementsByClassName('smSlider_child')
// console.log(smSlider_child)


// Explore starts

let explore_sub2 = document.querySelectorAll('.explore_sub2 div')
let explore_sub1 = document.querySelector('.explore_sub1 img')
let indicators = document.querySelectorAll('#indicators div')
// Explore ends

// Serach Starts 

let header_srch = document.querySelector('#header_srch');
let search_sec = document.querySelector('.search_sec');
let search_cross = document.querySelector('#search_cross')
header_srch.addEventListener('click',()=>{
    search_sec.style.top = '0px'
});

search_cross.addEventListener('click',()=>{
    search_sec.style.top = '-800px'
})

// Serach Ends


// Cards started*****************************************

let crds = document.querySelectorAll('.crds')

crds.forEach((crd,id)=>{
    crd.addEventListener('mouseover',()=>{
        let btn = crd.childNodes[5];
        btn.style.top = '270px'
    });

    crd.addEventListener('mouseleave',()=>{
        let btn = crd.childNodes[5];
        btn.style.top = '350px'
    })
})

// Cards Ended*****************************************




function back(){
    smSlider.prepend(smSlider_child[smSlider_child.length-1])
}

function next(){
    smSlider.append(smSlider_child[0])
}
// SmSlider Ends

// console.log(mobile_div_sec_parent_div)
if(getouterwidth < 1278){
    function toBringBack(id){
        let getLi = main_header_one_ul_li[id]
        let back = getLi.childNodes[3]
        search_left_arrow.addEventListener('click',()=>{
            back.style.left = '350px'
        })
    }
    
    main_header_one_ul_li.forEach((data,id)=>{
        data.addEventListener('click',()=>{
            let childs = data.childNodes[3]
            search_left_arrow.style.display = 'block'
            none.style.display = 'none'
            childs.style.left = '0px'
    
            toBringBack(id)
        })
    })

    function getSlide(i){
        // let getDiv = mobile_div_sec_parent_div[i]
        mobile_div_sec_parent_div.forEach((div,id)=>{
            if(id == i){
                div.style.display = 'flex'
                div.style.width = '33%'
            }
            else{
                div.style.display = 'none'
            }
        })
        
    }

    let i = 0
    rightt.addEventListener('click',()=>{
        i++
        if(i>mobile_div_sec_parent_div.length-1){
            i=0
            getSlide(i)
        }
        else{
            getSlide(i)
        }
    })

    leftt.addEventListener('click',()=>{
        i--
        if(i<0){
            i=0
            getSlide(i)
        }
        else{
            getSlide(i)
        }
    });


    function bac(){
        mini_bar_two_ul.append(mini_bar_two_ul_lii[0])
    }

    function forr(){
        mini_bar_two_ul.prepend(mini_bar_two_ul_lii[mini_bar_two_ul_lii.length-1])
    }

    function to_move(id){
        banner_div.forEach((div,idd)=>{
            if(id == idd){
               div.style.display = 'block'
               banner_slider_parent.style.width = '100%'
            }
            else{
                div.style.display = 'none'
            }
        })
    }

    banner_icons.forEach((but,id)=>{
        but.addEventListener('click',()=>{
            to_move(id)
        })
    })
}
else{
    main_header_one_ul_li.forEach((links,id)=>{
        links.addEventListener('mouseover',()=>{
            let thirdChild = links.childNodes[3]
            thirdChild.style.display = 'flex'
        })
    
        links.addEventListener('mouseleave',()=>{
            let thirdChild = links.childNodes[3]
            thirdChild.style.display = 'none'
        })
    });

    function underline(id){
        mini_bar_two_ul_li.forEach((link,idd)=>{
           if(id == idd){
                link.style.borderBottom = '2px solid black'
                link.style.fontWeight = 'bold'
           }
           else{
            link.style.borderBottom = 'none'
            link.style.fontWeight = '400'
           }
        })
    }

    mini_bar_two_ul_li.forEach((link,id)=>{
        link.addEventListener('click',()=>{
            underline(id)
        })
    });

    function to_move(id){
        banner_div.forEach((div,idd)=>{
            if(id == idd){
               div.style.display = 'block'
               banner_slider_parent.style.width = '100%'
            }
            else{
                div.style.display = 'none'
            }
        })
    }

    banner_icons.forEach((but,id)=>{
        but.addEventListener('click',()=>{
            to_move(id)
        })
    })


   

}
var imgArray = ['Img/pics/1.webp','Img/pics/2.webp','Img/pics/3.jpg','Img/pics/4.jpg','Img/pics/5.jpg']
if(getouterwidth>540){
   
    explore_sub2.forEach((div,id)=>{
        div.addEventListener('mouseover',()=>{
            div.style.height = '25%'
            div.style.borderTop = '2px solid black'
            div.style.borderBottom = '1px solid rgb(214, 206, 206)'
            div.style.transition = '0.5s'
            explore_sub1.src = imgArray[id]
        })

        div.addEventListener('mouseleave',()=>{
            div.style.height = '11%'
            div.style.borderTop = 'none'
            div.style.borderBottom = 'none'
        })
    })
}
else{

    function toBeDisplay(id){
        explore_sub1.src = imgArray[id]
        explore_sub2.forEach((data,idd)=>{
            if(id == idd){
                data.style.display = 'block'
            }
            else{
                data.style.display = 'none'
            }
        })
    }

    indicators.forEach((div,id)=>{
        div.addEventListener('click',()=>{
            toBeDisplay(id)
        })
    })
}




// DropDown Started

// For 1 ************************************************************************************* srated

let comapre_two_divs = document.querySelector('.drop_two');
let drop_two_li = document.querySelectorAll('.drop_two ul li');
let drop_two_img = document.querySelector('.compare_img>img')
let comapre_selectors = document.querySelector('.comapre_selectors')
let comapre_info = document.querySelector('.comapre_info>h2');
let comapre_selectors_div = document.querySelectorAll('.comapre_selectors>div')
let compre_rs = document.querySelector('.compre_rs')
let storage = document.querySelector('.storage a')
console.log(drop_two_li)
let drop_two_h2 = document.querySelector('.drop_two>h2')
comapre_two_divs.addEventListener('click',()=>{
    let div = comapre_two_divs.childNodes[4]
    let img = comapre_two_divs.childNodes[2]
    img.classList.toggle('move')
    div.classList.toggle('down')
});

var allDataObj = [
    {
        'size' : '26.69cm (10.5")',
        'resolution' : '1920 x 1200 (WUXGA)',
        'tech' : 'TFT',
        'color' : '16M',
        'rear' : '8.0 MP',
        'f_cam' : '5.0 MP',
        'int' : '-'
    },

    {
        'size' : '31.50cm (12.4")',
        'resolution' : '2560 x 1600 (WQXGA)',
        'tech' : 'TFT',
        'color' : '16M',
        'rear' : '8.0 MP',
        'f_cam' : '5.0 MP',
        'int' : '-'
    },

    {
        'size' : '31.50cm (12.4")',
        'resolution' : '2560 x 1600 (WQXGA)',
        'tech' : 'TFT',
        'color' : '16M',
        'rear' : '8.0 MP',
        'f_cam' : '5.0 MP',
        'int' : 'Up to 12'
    }

    
]

var blankArrayImg = []
function toBeDropped(id){

    let getData = allDataObj[id]

    compare_details_two.innerHTML = `
        <div>
        <h1>${getData.size}</h1>
        </div>
        <div>
            <h1>${getData.resolution}</h1>
        </div>
        <div>
            <h1>${getData.tech}</h1>
        </div>
        <div>
            <h1>${getData.color}</h1>
        </div>
        <div>
            <h1>${getData.rear}</h1>
        </div>
        <div>
            <h1>${getData.f_cam}</h1>
        </div>
        <div>
            <h1>${getData.int}</h1>
        </div>
    `

    if(id == 0){
        blankArrayImg = ['Img/a8_3gbgray.avif','Img/a8_3gbblack.avif']
        drop_two_img.src = blankArrayImg[0] 

        comapre_selectors.innerHTML = `
        <div class="gray"></div>
        <div class="black"></div>
        `

        storage.textContent = '32GB'

        comapre_info.textContent = 'From ₹775.73/mo for 24 mos at 15% Interestor₹ 17999.00'

        compre_rs.innerHTML = `<p>₹ 19999.00<span>Save ₹2000.00</span></p>`

        let comapre_selectors_div = document.querySelectorAll('.comapre_selectors>div')

        comapre_selectors_div.forEach((div,id)=>{
            div.addEventListener('click',()=>{
                drop_two_img.src = blankArrayImg[id]
            })
        })

    }
    if(id == 1){
        blankArrayImg = ['Img/a8_3gb1.avif','Img/a8_3gbgray.avif','Img/a8_3gbblack.avif']
        drop_two_img.src = blankArrayImg[0] 

        comapre_selectors.innerHTML = `
        <div class="pink"></div>
        <div class="gray"></div>
        <div class="black"></div>
        `

        storage.textContent = '64GB'

        comapre_info.textContent = 'From ₹678.76/mo for 24 mos at 15% Interestor₹ 15999.00'

        compre_rs.innerHTML = `<p>₹ 23599.00<span>Save ₹7600.00</span></p>`

        let comapre_selectors_div = document.querySelectorAll('.comapre_selectors>div')

        comapre_selectors_div.forEach((div,id)=>{
            div.addEventListener('click',()=>{
                drop_two_img.src = blankArrayImg[id]
            })
        })

    }
    if(id == 2){
        blankArrayImg = ['Img/tab1.avif','Img/tab2.avif','Img/tab3.avif']
        drop_two_img.src = blankArrayImg[0] 

        comapre_selectors.innerHTML = `
        <div class="pink"></div>
        <div class="gray"></div>
        <div class="black"></div>
        `

        storage.textContent = '64GB'

        comapre_info.textContent = 'From ₹1939.41/mo for 24 mos at 15% Interestor₹ 39999.00'

        compre_rs.innerHTML = `<p>₹ 49999.00<span>Save ₹10000.00</span></p>`

        let comapre_selectors_div = document.querySelectorAll('.comapre_selectors>div')

        comapre_selectors_div.forEach((div,id)=>{
            div.addEventListener('click',()=>{
                drop_two_img.src = blankArrayImg[id]
            })
        })
    }


}

drop_two_li.forEach((link,id)=>{
    link.addEventListener('click',()=>{
        drop_two_h2.innerHTML = link.textContent

        toBeDropped(id)
    })
});


// For 1 ************************************************************************************* Ended


// For 2 ************************************************************************************** started

let comapre_three_divs = document.querySelector('.drop_three');
let drop_three_li = document.querySelectorAll('.drop_three ul li');
let drop_two_img3 = document.querySelector('.compare_img3>img')
let comapre_selectors3 = document.querySelector('.comapre_selectors3')
let comapre_info3 = document.querySelector('.comapre_info3>h2');
// let comapre_selectors_div3 = document.querySelectorAll('.comapre_selectors3>div')
let compare_details_three = document.querySelector('.compare_details_three')
let compre_rs3 = document.querySelector('.compre_rs3')
let storage3 = document.querySelector('.storage3 a')
console.log(drop_two_li)
let drop_three_h2 = document.querySelector('.drop_three>h2')
comapre_three_divs.addEventListener('click',()=>{
    let div = comapre_three_divs.childNodes[4]
    let img = comapre_three_divs.childNodes[2]
    img.classList.toggle('move')
    div.classList.toggle('down')
});

var blankArrayImg = []
function toBeDropped3(id){

    let getData = allDataObj[id]
    compare_details_three.innerHTML = `
        <div>
        <h1>${getData.size}</h1>
        </div>
        <div>
            <h1>${getData.resolution}</h1>
        </div>
        <div>
            <h1>${getData.tech}</h1>
        </div>
        <div>
            <h1>${getData.color}</h1>
        </div>
        <div>
            <h1>${getData.rear}</h1>
        </div>
        <div>
            <h1>${getData.f_cam}</h1>
        </div>
        <div>
            <h1>${getData.int}</h1>
        </div>
    `

    if(id == 0){
        blankArrayImg = ['Img/a8_3gbgray.avif','Img/a8_3gbblack.avif']
        drop_two_img3.src = blankArrayImg[0] 

        comapre_selectors3.innerHTML = `
        <div class="gray"></div>
        <div class="black"></div>
        `

        storage3.textContent = '32GB'

        comapre_info3.textContent = 'From ₹775.73/mo for 24 mos at 15% Interestor₹ 17999.00'

        compre_rs3.innerHTML = `<p>₹ 19999.00<span>Save ₹2000.00</span></p>`

        let comapre_selectors_div3 = document.querySelectorAll('.comapre_selectors3>div')

        comapre_selectors_div3.forEach((div,id)=>{
            div.addEventListener('click',()=>{
                drop_two_img3.src = blankArrayImg[id]
            })
        })

    }
    if(id == 1){
        blankArrayImg = ['Img/a8_3gb1.avif','Img/a8_3gbgray.avif','Img/a8_3gbblack.avif']
        drop_two_img3.src = blankArrayImg[0] 

        comapre_selectors3.innerHTML = `
        <div class="pink"></div>
        <div class="gray"></div>
        <div class="black"></div>
        `

        storage3.textContent = '64GB'

        comapre_info3.textContent = 'From ₹678.76/mo for 24 mos at 15% Interestor₹ 15999.00'

        compre_rs3.innerHTML = `<p>₹ 23599.00<span>Save ₹7600.00</span></p>`

        let comapre_selectors_div3 = document.querySelectorAll('.comapre_selectors3>div')

        comapre_selectors_div3.forEach((div,id)=>{
            div.addEventListener('click',()=>{
                drop_two_img3.src = blankArrayImg[id]
            })
        })

    }
    if(id == 2){
        blankArrayImg = ['Img/tab1.avif','Img/tab2.avif','Img/tab3.avif']
        drop_two_img3.src = blankArrayImg[0] 

        comapre_selectors3.innerHTML = `
        <div class="pink"></div>
        <div class="gray"></div>
        <div class="black"></div>
        `

        storage3.textContent = '64GB'

        comapre_info3.textContent = 'From ₹1939.41/mo for 24 mos at 15% Interestor₹ 39999.00'

        compre_rs.innerHTML = `<p>₹ 49999.00<span>Save ₹10000.00</span></p>`

        let comapre_selectors_div3 = document.querySelectorAll('.comapre_selectors3>div')

        comapre_selectors_div3.forEach((div,id)=>{
            div.addEventListener('click',()=>{
                drop_two_img3.src = blankArrayImg[id]
            })
        })
    }


}

drop_three_li.forEach((link,id)=>{
    link.addEventListener('click',()=>{
        drop_three_h2.innerHTML = link.textContent

        toBeDropped3(id)
    })
});

// For 2 ************************************************************************************** Ended




// For 3 **************************************************************************************Started

let comapre_four_divs = document.querySelector('.drop_four');
let drop_four_li = document.querySelectorAll('.drop_four ul li');
let drop_two_img4 = document.querySelector('.compare_img4>img')
let comapre_selectors4 = document.querySelector('.comapre_selectors4')
let comapre_info4 = document.querySelector('.comapre_info4>h2');
// let comapre_selectors_div3 = document.querySelectorAll('.comapre_selectors3>div')
let compare_details_four = document.querySelector('.compare_details_four')
let compre_rs4 = document.querySelector('.compre_rs4')
let storage4 = document.querySelector('.storage4 a')
let compare_details_two = document.querySelector('.compare_details_two')
console.log(drop_two_li)
let drop_four_h2 = document.querySelector('.drop_four>h2')
comapre_four_divs.addEventListener('click',()=>{
    let div = comapre_four_divs.childNodes[4]
    let img = comapre_four_divs.childNodes[2]
    img.classList.toggle('move')
    div.classList.toggle('down')
});



var blankArrayImg = []
function toBeDropped4(id){

    let getData = allDataObj[id]
    compare_details_four.innerHTML = `
        <div>
        <h1>${getData.size}</h1>
        </div>
        <div>
            <h1>${getData.resolution}</h1>
        </div>
        <div>
            <h1>${getData.tech}</h1>
        </div>
        <div>
            <h1>${getData.color}</h1>
        </div>
        <div>
            <h1>${getData.rear}</h1>
        </div>
        <div>
            <h1>${getData.f_cam}</h1>
        </div>
        <div>
            <h1>${getData.int}</h1>
        </div>
    `

    if(id == 0){
        blankArrayImg = ['Img/a8_3gbgray.avif','Img/a8_3gbblack.avif']
        drop_two_img4.src = blankArrayImg[0] 

        comapre_selectors4.innerHTML = `
        <div class="gray"></div>
        <div class="black"></div>
        `

        storage4.textContent = '32GB'

        comapre_info4.textContent = 'From ₹775.73/mo for 24 mos at 15% Interestor₹ 17999.00'

        compre_rs4.innerHTML = `<p>₹ 19999.00<span>Save ₹2000.00</span></p>`

        let comapre_selectors_div4 = document.querySelectorAll('.comapre_selectors4>div')

        comapre_selectors_div4.forEach((div,id)=>{
            div.addEventListener('click',()=>{
                drop_two_img4.src = blankArrayImg[id]
            })
        })

    }
    if(id == 1){
        blankArrayImg = ['Img/a8_3gb1.avif','Img/a8_3gbgray.avif','Img/a8_3gbblack.avif']
        drop_two_img4.src = blankArrayImg[0] 

        comapre_selectors4.innerHTML = `
        <div class="pink"></div>
        <div class="gray"></div>
        <div class="black"></div>
        `

        storage4.textContent = '64GB'

        comapre_info4.textContent = 'From ₹678.76/mo for 24 mos at 15% Interestor₹ 15999.00'

        compre_rs4.innerHTML = `<p>₹ 23599.00<span>Save ₹7600.00</span></p>`

        let comapre_selectors_div4 = document.querySelectorAll('.comapre_selectors4>div')

        comapre_selectors_div4.forEach((div,id)=>{
            div.addEventListener('click',()=>{
                drop_two_img4.src = blankArrayImg[id]
            })
        })

    }
    if(id == 2){
        blankArrayImg = ['Img/tab1.avif','Img/tab2.avif','Img/tab3.avif']
        drop_two_img4.src = blankArrayImg[0] 

        comapre_selectors4.innerHTML = `
        <div class="pink"></div>
        <div class="gray"></div>
        <div class="black"></div>
        `

        storage4.textContent = '64GB'

        comapre_info4.textContent = 'From ₹1939.41/mo for 24 mos at 15% Interestor₹ 39999.00'

        compre_rs4.innerHTML = `<p>₹ 49999.00<span>Save ₹10000.00</span></p>`

        let comapre_selectors_div4 = document.querySelectorAll('.comapre_selectors4>div')

        comapre_selectors_div4.forEach((div,id)=>{
            div.addEventListener('click',()=>{
                drop_two_img4.src = blankArrayImg[id]
            })
        })
    }


}

drop_four_li.forEach((link,id)=>{
    link.addEventListener('click',()=>{
        drop_four_h2.innerHTML = link.textContent

        toBeDropped4(id)
    })
});


// For 3 **************************************************************************************Ended

// DropDown Ended



// Tv Slider Starts******************************************************************************

let tv_list_li = document.querySelectorAll('.tv_list>ul li')
let TV_h1 = document.querySelector('.TV>h1')
let tvArray = ['Img/oled.webp','frame.avif','freestyle.avif'];
let TV_background = document.querySelector('.TV')

var ttv = document.getElementsByClassName('ttv')
console.log(ttv)
function tv(id){
    TV_background.style.backgroundImage = `url(${tvArray[id]})`
    TV_background.style.transition = '0.5s'
    tv_list_li.forEach((link,idd)=>{
        if(idd == id){
            link.style.borderBottom = '2px solid black'
        }
        else{
            link.style.borderBottom = 'none'
        }
    })

    if(id == 1 || id == 2){
        TV_h1.style.color = 'white'
        tv_list_li.forEach((li)=>{
            li.style.color = 'white'
            tv_list_li[id].style.borderBottom = '2px solid white'
            // li.style.borderBottom = '2px solid white'
        })
    }
    else{
        TV_h1.style.color = 'black'
        tv_list_li.forEach((li)=>{
            li.style.color = 'black'
            // li.style.borderBottom = '2px solid black'
        })
    }
}

var tv_details_parent_divs = document.querySelectorAll('.tv_details_parent>div')
console.log(tv_details_parent_divs)
function slide(id){

    
    tv_details_parent_divs.forEach((div,idd)=>{
        if(id == idd){
            div.style.display = 'block'
            div.style.width = '33.33%'
            div.style.transition = '0.8s'
        }
        else{
            div.style.display = 'none'
        }
    })
}

tv_list_li.forEach((link,id)=>{
    link.addEventListener('click',()=>{
        tv(id)
        slide(id)
    })
})

// Tv Slider Ends******************************************************************************



// MObile testing started****************************************************************

// ********************************************** 1 START ****************************************************

let mt_one_shades_divs = document.querySelectorAll('.mt_one_shades>div');
let mt_one_img = document.querySelector('.mt_one_img>img')
let img_div = document.querySelector('.mt_one_img')
let hidden_filed = document.querySelector('#hid')
var imgA;
var start = 1
function mover(){
    var thatValue = hidden_filed.value
    // console.log(thatValue)
    if(thatValue == 0){
        imgA = ['Img/pics/s22brown5.webp','Img/pics/s22brown2.webp','Img/pics/s22brown3.webp','Img/pics/s22brown4.webp']
     
    }

    else if(thatValue == 1){
        imgA = ['Img/pics/s22black4.webp','Img/pics/s22black1.webp','Img/pics/s22black2.webp','Img/pics/s22black3.webp']
   
    }

    else{
        imgA = ['Img/pics/s22green5.webp','Img/pics/s22green2.webp','Img/pics/s22green3.webp','Img/pics/s22green4.webp']
    }

    mt_one_img.src = imgA[start]

    if(start<imgA.length-1){
        start++
        console.log(start)
    }
    else{
        start = 0
    }
}

var end = '';
mt_one_img.addEventListener('mouseover',()=>{
    end = setInterval(mover,1000)
})

mt_one_img.addEventListener('mouseleave',()=>{
    clearInterval(end)
})

function moved(id){
    imgA = ['Img/pics/s22brown5.webp','Img/pics/s22black4.webp','Img/pics/s22green5.webp']
    mt_one_img.src = imgA[id]
}

mt_one_shades_divs.forEach((div,id)=>{
    div.addEventListener('click',()=>{
        moved(id)
        hidden_filed.value = id
    });
});

// ********************************************** 1 END ****************************************************



// ********************************************** 2 START**************************************************

let mt_two_shades = document.querySelectorAll('.mt_two_shades>div')
let mt_two_img = document.querySelector('.mt_two_img>img')
// let mt_two_img_div = document.querySelector('.mt_two_img')
var two_hidden = document.querySelector('#two_hidden')

var increment = 1
function two_slide(){
    var mainID = two_hidden.value
    console.log(mainID)
    if(mainID == 0){
        ar1 = ['Img/pics/s22+black1.webp','Img/pics/s22+black2.webp','Img/pics/s22+black3.webp']
    }

    else if(mainID == 1){
        ar1 = ['Img/pics/s22+white1.webp','Img/pics/s22+white2.webp','Img/pics/s22+white3.webp','Img/pics/s22+white4.webp']
    }

    else{
        ar1 = ['Img/pics/s22+green1.webp','Img/pics/s22+green2.webp','Img/pics/s22+green3.webp']
    }

    mt_two_img.src = ar1[increment]
    
    if(increment<ar1.length-1){
        increment++
    }
    else{
        increment = 0;
    }
}

function two_change(id){
    var imgAr = ['Img/pics/s22+black1.webp','Img/pics/s22+white1.webp','Img/pics/s22+green1.webp']
    
    mt_two_img.src = imgAr[id]
}

var two_int;
mt_two_img.addEventListener('mouseover',()=>{
   two_int = setInterval(two_slide,1000)
})

mt_two_img.addEventListener('mouseleave',()=>{
    clearInterval(two_int)
})

mt_two_shades.forEach((data,id)=>{
    data.addEventListener('click',()=>{
        
        two_change(id)
        two_hidden.value = id
    })
})




// ********************************************** 2 END**************************************************


// **********************************************3 FISRT*************************************************

let mt_three_shades = document.querySelectorAll('.mt_three_shades>div')
let mt_three_img = document.querySelector('.mt_three_img>img')
let mt_three_img_div = document.querySelector('.mt_three_img')
var three_hid = document.querySelector('#three_hid')

var inc = 1
function three_slide(){
    var mainID = three_hid.value

    if(mainID == 1){
        ar2 = ['Img/pics/s22+black1.webp','Img/pics/s22+black2.webp','Img/pics/s22+black3.webp']
    }

    else if(mainID == 0){
        ar2 = ['Img/pics/s22+white1.webp','Img/pics/s22+white2.webp','Img/pics/s22+white3.webp','Img/pics/s22+white4.webp']
    }

    else{
        ar2 = ['Img/pics/s22+green1.webp','Img/pics/s22+green2.webp','Img/pics/s22+green3.webp']
    }

    mt_three_img.src = ar2[inc]
    
    if(inc<ar2.length-1){
        inc++
    }
    else{
        inc = 0;
    }
}

function three_change(id){
    var imgAr = ['Img/pics/s22+white1.webp','Img/pics/s22+black1.webp','Img/pics/s22+green1.webp']
    
    mt_three_img.src = imgAr[id]
}

var three_int;
mt_three_img.addEventListener('mouseover',()=>{
   three_int = setInterval(three_slide,1000)
})

mt_three_img.addEventListener('mouseleave',()=>{
    clearInterval(three_int)
})

mt_three_shades.forEach((data,id)=>{
    data.addEventListener('click',()=>{
        
        three_change(id)
        three_hid.value = id
    })
})

// **********************************************3 END*************************************************

// MObile testing Ended******************************************************************





// Footer start*************************************************************************

let footer = document.querySelectorAll('.footer>div')

var sec = '';
function toBeDown(id){
    footer.forEach((div,idd)=>{
        if(id == idd){
           sec = div.childNodes[2]
           sec.classList.toggle('downn')
           div.classList.toggle('downn')
        }
        else{
            sec = div.childNodes[2]
            sec.classList.remove('downn')
            div.classList.remove('downn')
            console.log(sec)
        }
    })
}

footer.forEach((div,id)=>{
    div.addEventListener('click',()=>{
       
        toBeDown(id)
    })
})

// Footer End*************************************************************************



