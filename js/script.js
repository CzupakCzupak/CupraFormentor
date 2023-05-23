const elo = new Splide( '.splide-models', {
    type   : 'loop',
    focus: 'center',
    padding: '23vw',
    autoWidth: true,
    gap: '36.5%',
} );
elo.mount()

const formentorSplide = new Splide( '.splide-formentor-desc', {
    perPage: 3,
    // focus  : 0,
    gap: '3.2rem',
    breakpoints: {
          1400: {
              perPage: 2,
          },
          700: {
              perPage: 1,
          },
    }
});
formentorSplide.mount()

const splidesAmazed = document.querySelectorAll('.splide-amazed')
splidesAmazed.forEach(item => {
    let slider = new Splide( item, {
        perpage: 1,
        type   : 'loop',
        
    })
    slider.mount()

})

const select = document.querySelector('.car-select-btn')
const selectOptions = document.querySelectorAll('.car-option-box')
const body = document.body
const ctaHidden = document.querySelector('.cta-hidden')

const offerSelect = document.querySelector('.offer-select')


body.addEventListener('click', closeList)
select.addEventListener('click', listActive)
offerSelect.addEventListener('click', listActive)
// selectOptions.forEach(item =>{
//     item.addEventListener('click',changeAttr)
// })

function closeList(e){
    if(!e.target.classList.contains('car-select-btn') && !e.target.closest('.car-select-btn')){
        select.classList.remove('car-select-active')
        selectOptions.forEach(item => {
            item.classList.remove('car-option-active')
        })
        flag = 0
    }
}

let flag = 0
let optionsChildren
function listActive(e){
    if(!e.target.closest('.offer-select')){
        select.classList.add('car-select-active')
        optionsChildren = select.querySelectorAll('.car-option-box')
    }else{
        offerSelect.classList.add('car-select-active')
        optionsChildren = offerSelect.querySelectorAll('.car-option-box')
    }
    optionsChildren.forEach(item => {
        item.classList.add('car-option-active')
    }) 

    if(flag > 0){
        const parentEl = e.target.closest('.car-option-box');
        const value = parentEl.dataset.name
        ctaHidden.value = value
        e.target.closest('.car-select-btn').classList.remove('car-select-active')
        optionsChildren.forEach(item => {
            item.classList.remove('car-option-active')
            item.classList.remove('first-option')
        })
        parentEl.classList.add('first-option')
        flag = 0
    }else{
        flag++
    }
}



const currentYear = new Date().getFullYear();
const yearEl = document.querySelector(".currentyear");

yearEl.textContent = currentYear;


const header = document.querySelector('.nav-absolute')
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // scrool to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(`${href}`);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile nav
    if (header.classList.contains("active")) {
      header.classList.remove("active");
    }
  });
});

const offerBtn = document.querySelectorAll('.ask-offer')
const sectionOffer = document.querySelector('.section-offer')
const clsBtn = document.querySelectorAll('.cls-offer')

clsBtn.forEach(item => {
    item.addEventListener('click', toggleOffer )
})


offerBtn.forEach(item => {
    item.addEventListener('click', toggleOffer)

})
function toggleOffer(){
    sectionOffer.classList.toggle('offer-active')
}
const hamburger = document.querySelectorAll('.toggle')
hamburger.forEach(item => {
    item.addEventListener("click",()=>{
        if(sectionOffer.classList.contains("offer-active")){
            sectionOffer.classList.remove('offer-active')
        }
        header.classList.toggle('active')
    })
})



