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
} );
formentorSplide.mount()

const splidesAmazed = document.querySelectorAll('.splide-amazed')
splidesAmazed.forEach(item => {
    let slider = new Splide( item, {
        perpage: 1,
        type   : 'loop',
        
    })
    slider.mount()

})


