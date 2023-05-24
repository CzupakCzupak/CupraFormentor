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

const selectBtn = document.querySelectorAll('.select-btn')

const dropdownList = document.querySelectorAll('.car-list')
selectBtn.forEach(item =>{
        item.addEventListener('click',openList)
})

function openList(e){
    const currentSelect = e.target.closest('.select-btn')
    const currentCarList = currentSelect.querySelector('.car-list')
    currentCarList.classList.toggle('active')
    currentSelect.classList.toggle('active')
}

const carOptions = document.querySelectorAll('.option-car')
carOptions.forEach(item => {
    item.addEventListener('click', (e)=>{
        const parent = e.target.closest('.option-car')
        const grandparent = parent.closest('.select-btn')
        const chosenTitle = grandparent.querySelector('.chosen-car-title')
        const chosenImg = grandparent.querySelector('.chosen-car-img')
        const name = parent.querySelector('.car-option-title').textContent
        const img = parent.querySelector('.car-img').src
        const hidden = grandparent.querySelector('input[type=hidden]')
        chosenImg.src = img
        chosenTitle.textContent = name
        hidden.value = name
    })
})

const body = document.body
body.addEventListener('click', closeList)
function closeList(e){
    if(!e.target.classList.contains('car-list') && !e.target.closest('.select-btn')){
        selectBtn.forEach(item =>{
            item.classList.remove('active')
        })
        dropdownList.forEach(item =>{
            item.classList.remove('active')
        })
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
      shadow.classList.remove('active')
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

const shadow = document.querySelector('.shadow')
const hamburger = document.querySelectorAll('.toggle')
hamburger.forEach(item => {
    item.addEventListener("click",()=>{
        if(sectionOffer.classList.contains("offer-active")){
            sectionOffer.classList.remove('offer-active')
        }
        header.classList.toggle('active')
        shadow.classList.toggle('active')
    })
})

shadow.addEventListener('click', ()=> {
    header.classList.remove("active");
    shadow.classList.remove('active')
})


const sectionHeroEl = document.querySelector(".hero-section");
const realHeader = document.querySelector(".header")

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      realHeader.classList.add("sticky");
    } else {
      realHeader.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

