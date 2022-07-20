const scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', function () {
    console.log(this.pageYOffset);
    if (this.pageYOffset >= 100) {
        scrollTop.style.display = 'block';
    }
    else {
        scrollTop.style.display = 'none';
    }
})
scrollTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

const lookBtns = document.querySelectorAll('.fa.fa-search')
lookBtns.forEach(element => {
    element.addEventListener('click', function () {
        const imgID = element.dataset.img
        const imgTag = document.querySelector('#'+imgID)
        const review = document.querySelector('#review')
        review.src = imgTag.src
    })
});
