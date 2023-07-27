let drop_parent_child = document.querySelector('.drop_parent_child');
let drop_parent_child_one = document.querySelector('.drop_parent_child_one')
let drop_parent_child_one_child = document.querySelector('.drop_parent_child_one_child');
let drop_parent_child_one_img = document.querySelector('.drop_parent_child_one img')
let drop_parent_child_one_child_li = document.querySelectorAll('.drop_parent_child_one_child ul li')
let drop_parent_child_one_h2 = document.querySelector('.drop_parent_child_one h2')
let tab_selectors = document.querySelector('.tab_selectors')
let tab_selectors_div = document.querySelector('.tab_selectors div')
let drop_parent_child2_img = document.querySelector('.drop_parent_child2 img')
let tab_info = document.querySelector('.tab_info p')
let tab_price = document.querySelector('.tab_price')
let tab_information_subdiv1 = document.querySelector('.tab_information_subdiv1')
// let tab_price_span = document.querySelector('.tab_price p span')

let blankArrayImg = []
let blankArrayColor = ['pink','gray','black']
let blankArrayInfo = ['From ₹824.22/mo for 24 mos at 15% Interestor₹ 18999.00','From ₹727.25/mo for 24 mos at 15% Interestor₹ 16999.00','From ₹2036.39/mo for 24 mos at 15% Interestor₹ 41999.00']
var price = [
    {
        'A8_3gb' : ['₹ 19999.00','Save ₹1000.00'],
        'A8_4gb' : ['₹ 23599.00','Save ₹6600.00'],
        'S7_FE' : ['₹ 49999.00','Save ₹8000.00']
    }
]

var allSpces = [
    {
        'Name' : 'A8_3gb',
        'Size' : '26.69cm (10.5")',
        'Resolution' : '1920 x 1200 (WUXGA)',
        'Tech' : 'TFT',
        'Color_Depth' : '16M',
        'Rear_Cam' : '8.0 MP',
        'Front_Cam' : '5.0 MP',
        'internet' : '-'
    },

    {
        'Name' : 'A8_4gb',
        'Size' : '26.69cm (10.5")',
        'Resolution' : '1920 x 1200 (WUXGA)',
        'Tech' : 'TFT',
        'Color_Depth' : '16M',
        'Rear_Cam' : '8.0 MP',
        'Front_Cam' : '5.0 MP',
        'internet' : '-'
    },

    {
        'Name' : 'S7_FE',
        'Size' : '31.50cm (12.4")',
        'Resolution' : '2560 x 1600 (WQXGA)',
        'Tech' : 'TFT',
        'Color_Depth' : '16M',
        'Rear_Cam' : '8.0 MP',
        'Front_Cam' : '5.0 MP',
        'internet' : 'Up to 12'
    }
]
function dropDown(id){

    tab_info.innerHTML = blankArrayInfo[id]

    let specs = allSpces[id]
    tab_information_subdiv1.innerHTML = `
        <div>
            <p>${specs.Size}</p>
        </div>
        <div>
            <p>${specs.Resolution}</p>
        </div>
        <div>
            <p>${specs.Tech}</p>
        </div>
        <div>
            <p>${specs.Color_Depth}</p>
        </div>
        <div>
            <p>${specs.Rear_Cam}</p>
        </div>
        <div>
            <p>${specs.Front_Cam}</p>
        </div>
        <div>
            <p>${specs.internet}</p>
        </div>
    `

    if(id == 0){
        blankArrayImg = ['Img/a8_3gbgray.avif','Img/a8_3gbblack.avif']
        
        tab_selectors.innerHTML = `<div class="${blankArrayColor[1]}"></div>
                                    <div class="${blankArrayColor[2]}"></div>
                                   `
        drop_parent_child2_img.src = blankArrayImg[0]

        tab_selectors.addEventListener('click',(e)=>{
            if(e.target.classList.contains('gray')){
                drop_parent_child2_img.src = blankArrayImg[0]
            }
            else{
                drop_parent_child2_img.src = blankArrayImg[1]
            }
        })

        let pricee = price[0].A8_3gb
        tab_price.innerHTML = `
        <p><span>${pricee[0]}</span>${pricee[1]}</p>
        `
        
    }

    if(id == 1){
        blankArrayImg = ['Img/a8_3gb1.avif','Img/a8_3gbgray.avif','Img/a8_3gbblack.avif']
        tab_selectors.innerHTML = `<div class="${blankArrayColor[0]}"></div>
                                    <div class="${blankArrayColor[1]}"></div>
                                    <div class="${blankArrayColor[2]}"></div>
                                    `
        drop_parent_child2_img.src = blankArrayImg[0]

        tab_selectors.addEventListener('click',(e)=>{
            if(e.target.classList.contains('pink')){
                drop_parent_child2_img.src = blankArrayImg[0]
            }
            else if(e.target.classList.contains('gray')){
                drop_parent_child2_img.src = blankArrayImg[1]
            }
            else{
                drop_parent_child2_img.src = blankArrayImg[2]
            }
        })

        let pricee = price[0].A8_4gb
        tab_price.innerHTML = `
        <p><span>${pricee[0]}</span>${pricee[1]}</p>
        `
    }

    if(id == 2){
        blankArrayImg = ['Img/tab1.avif','Img/tab2.avif','Img/tab3.avif']
        tab_selectors.innerHTML = `<div class="${blankArrayColor[0]}"></div>
        <div class="${blankArrayColor[1]}"></div>
        <div class="${blankArrayColor[2]}"></div>
        `

        drop_parent_child2_img.src = blankArrayImg[0]

        tab_selectors.addEventListener('click',(e)=>{
            if(e.target.classList.contains('pink')){
                drop_parent_child2_img.src = blankArrayImg[0]
            }
            else if(e.target.classList.contains('gray')){
                drop_parent_child2_img.src = blankArrayImg[1]
            }
            else{
                drop_parent_child2_img.src = blankArrayImg[2]
            }
        })

        let pricee = price[0].S7_FE
        tab_price.innerHTML = `
        <p><span>${pricee[0]}</span>${pricee[1]}</p>
        `
    }
}

drop_parent_child_one.addEventListener('click',()=>{
    drop_parent_child_one_child.classList.toggle('down')
    drop_parent_child_one_img.style.rotate = '180deg'
});

drop_parent_child_one_child_li.forEach((data,id)=>{
    data.addEventListener('click',()=>{
        drop_parent_child_one_h2.innerHTML = data.textContent
        dropDown(id)
        drop_parent_child_one_img.style.rotate = '0deg'
    })
})


// For second

let two = document.querySelector('.drop_parent_child_one2')
let two_child = document.querySelector('.drop_parent_child_one_child2')
let two_img = document.querySelector('.drop_parent_child_one2 img')
let two_h2 = document.querySelector('.drop_parent_child_one2 h2')
let two_li = document.querySelectorAll('.drop_parent_child_one_child2 ul li')
let drop_parent_child22_img = document.querySelector('.drop_parent_child22 img')
let tab_selectors2 = document.querySelector('.tab_selectors2')
let tab_info2 = document.querySelector('.tab_info2 p')
let tab_price2 = document.querySelector('.tab_price2')
let tab_information_subdiv2 = document.querySelector('.tab_information_subdiv2')

function dropDown1(id){

    tab_info2.innerHTML = blankArrayInfo[id]

    let specs = allSpces[id]
    tab_information_subdiv2.innerHTML = `
        <div>
            <p>${specs.Size}</p>
        </div>
        <div>
            <p>${specs.Resolution}</p>
        </div>
        <div>
            <p>${specs.Tech}</p>
        </div>
        <div>
            <p>${specs.Color_Depth}</p>
        </div>
        <div>
            <p>${specs.Rear_Cam}</p>
        </div>
        <div>
            <p>${specs.Front_Cam}</p>
        </div>
        <div>
            <p>${specs.internet}</p>
        </div>
    `

    if(id == 0){
        blankArrayImg = ['Img/a8_3gbgray.avif','Img/a8_3gbblack.avif']

        drop_parent_child22_img.src = blankArrayImg[0]   
        
        tab_selectors2.innerHTML = `<div class="${blankArrayColor[1]}"></div>
        <div class="${blankArrayColor[2]}"></div>`

        tab_selectors2.addEventListener('click',(e)=>{
            if(e.target.classList.contains('gray')){
                drop_parent_child22_img.src = blankArrayImg[0]
            }
            else{
                drop_parent_child22_img.src = blankArrayImg[1]
            }
        })

        let pricee = price[0].A8_3gb
        tab_price2.innerHTML = `
        <p><span>${pricee[0]}</span>${pricee[1]}</p>
        `
    }

    if(id == 1){
        blankArrayImg = ['Img/a8_3gb1.avif','Img/a8_3gbgray.avif','Img/a8_3gbblack.avif']

        drop_parent_child22_img.src = blankArrayImg[0]   
        
        tab_selectors2.innerHTML = `<div class="${blankArrayColor[0]}"></div>
        <div class="${blankArrayColor[1]}"></div>
        <div class="${blankArrayColor[2]}"></div>
        `

        tab_selectors2.addEventListener('click',(e)=>{
            if(e.target.classList.contains('pink')){
                drop_parent_child22_img.src = blankArrayImg[0]
            }
            else if(e.target.classList.contains('gray')){
                drop_parent_child22_img.src = blankArrayImg[1]
            }
            else{
                drop_parent_child22_img.src = blankArrayImg[2]
            }
        })

          let pricee = price[0].A8_4gb
        tab_price2.innerHTML = `
        <p><span>${pricee[0]}</span>${pricee[1]}</p>
        `
    }

    if(id == 2){
        blankArrayImg = ['Img/tab1.avif','Img/tab2.avif','Img/tab3.avif']

        drop_parent_child22_img.src = blankArrayImg[0]   
        
        tab_selectors2.innerHTML = `<div class="${blankArrayColor[0]}"></div>
        <div class="${blankArrayColor[1]}"></div>
        <div class="${blankArrayColor[2]}"></div>
        `

        tab_selectors2.addEventListener('click',(e)=>{
            if(e.target.classList.contains('pink')){
                drop_parent_child22_img.src = blankArrayImg[0]
            }
            else if(e.target.classList.contains('gray')){
                drop_parent_child22_img.src = blankArrayImg[1]
            }
            else{
                drop_parent_child22_img.src = blankArrayImg[2]
            }
        })

        let pricee = price[0].S7_FE
        tab_price2.innerHTML = `
        <p><span>${pricee[0]}</span>${pricee[1]}</p>
        `
    }
}

two.addEventListener('click',()=>{
    two_child.classList.toggle('down')
    two_img.style.rotate = '180deg';
});

two_li.forEach((data,id)=>{
    data.addEventListener('click',()=>{
        dropDown1(id)
        two_h2.innerHTML = data.textContent;
    })
})



// for third
let three = document.querySelector('.drop_parent_child_one3')
let three_child = document.querySelector('.drop_parent_child_one_child3')
let three_img = document.querySelector('.drop_parent_child_one3 img')
let three_h2 = document.querySelector('.drop_parent_child_one3 h2')
let three_li = document.querySelectorAll('.drop_parent_child_one_child3 ul li')
let drop_parent_child23_img = document.querySelector('.drop_parent_child23 img')
let tab_selectors3 = document.querySelector('.tab_selectors3')
let tab_info3 = document.querySelector('.tab_info3 p')
let tab_price3 = document.querySelector('.tab_price3')
let tab_information_subdiv3 = document.querySelector('.tab_information_subdiv3')

function dropDown2(id){

    tab_info3.innerHTML = blankArrayInfo[id]

    let specs = allSpces[id]
     tab_information_subdiv3.innerHTML = `
        <div>
            <p>${specs.Size}</p>
        </div>
        <div>
            <p>${specs.Resolution}</p>
        </div>
        <div>
            <p>${specs.Tech}</p>
        </div>
        <div>
            <p>${specs.Color_Depth}</p>
        </div>
        <div>
            <p>${specs.Rear_Cam}</p>
        </div>
        <div>
            <p>${specs.Front_Cam}</p>
        </div>
        <div>
            <p>${specs.internet}</p>
        </div>
    `

    if(id == 0){
        blankArrayImg = ['Img/a8_3gbgray.avif','Img/a8_3gbblack.avif']
        drop_parent_child23_img.src = blankArrayImg[0]

        tab_selectors3.innerHTML = `
        <div class="${blankArrayColor[1]}"></div>
        <div class="${blankArrayColor[2]}"></div>
        `
        tab_selectors3.addEventListener('click',(e)=>{
            if(e.target.classList.contains('gray')){
                drop_parent_child23_img.src = blankArrayImg[0]
            }

            else{
                drop_parent_child23_img.src = blankArrayImg[1]
            }
        })

        let pricee = price[0].A8_3gb
        tab_price3.innerHTML = `
        <p><span>${pricee[0]}</span>${pricee[1]}</p>
        `
        
    }

    if(id == 1){
        blankArrayImg = ['Img/a8_3gb1.avif','Img/a8_3gbgray.avif','Img/a8_3gbblack.avif']

        drop_parent_child23_img.src = blankArrayImg[0]

        tab_selectors3.innerHTML = `
        <div class="${blankArrayColor[0]}"></div>
        <div class="${blankArrayColor[1]}"></div>
        <div class="${blankArrayColor[2]}"></div>
        `
        tab_selectors3.addEventListener('click',(e)=>{
            if(e.target.classList.contains('pink')){
                drop_parent_child23_img.src = blankArrayImg[0]
            }

            else if(e.target.classList.contains('gray')){
                drop_parent_child23_img.src = blankArrayImg[1]
            }
            else{
                drop_parent_child23_img.src = blankArrayImg[2]
            }
        })

        let pricee = price[0].A8_4gb
        tab_price3.innerHTML = `
        <p><span>${pricee[0]}</span>${pricee[1]}</p>
        `
    }

    if(id == 2){
        blankArrayImg = ['Img/tab1.avif','Img/tab2.avif','Img/tab3.avif']

        drop_parent_child23_img.src = blankArrayImg[0]

        tab_selectors3.innerHTML = `
        <div class="${blankArrayColor[0]}"></div>
        <div class="${blankArrayColor[1]}"></div>
        <div class="${blankArrayColor[2]}"></div>
        `
        tab_selectors3.addEventListener('click',(e)=>{
            if(e.target.classList.contains('pink')){
                drop_parent_child23_img.src = blankArrayImg[0]
            }

            else if(e.target.classList.contains('gray')){
                drop_parent_child23_img.src = blankArrayImg[1]
            }
            else{
                drop_parent_child23_img.src = blankArrayImg[2]
            }
        })

        let pricee = price[0].S7_FE
        tab_price3.innerHTML = `
        <p><span>${pricee[0]}</span>${pricee[1]}</p>
        `

    }
}

three.addEventListener('click',()=>{
    three_child.classList.toggle('down')
    three_img.style.rotate = '180deg';
});

three_li.forEach((data,id)=>{
    data.addEventListener('click',()=>{
        dropDown2(id)
        three_h2.innerHTML = data.textContent;
    })
})


