const resumebtns = document.querySelectorAll(".resume-btn");
const navlinks = document.querySelectorAll('header nav a');
const logolink = document.querySelector('.logo')
const sections = document.querySelectorAll('section')
const menuicon = document.querySelector('#menu-icon')
const navbar = document.querySelector('header nav')

menuicon.addEventListener('click', () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})


const activepage = () => {
    const header = document.querySelector('header');
    const barsbox = document.querySelector('.bars-box');

    header.classList.remove('active')
    setTimeout(() => {
        header.classList.add('active')
    }, 1100);

    navlinks.forEach(link => {
        link.classList.remove('active');
    });

    barsbox.classList.remove('active')
    setTimeout(() => {
        barsbox.classList.add('active')
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

navlinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activepage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logolink.addEventListener('click', () => {
    if (!navlinks[0].classList.contains('active')){
        activepage()

        navlinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});


resumebtns.forEach((btn, idx) => {
    btn.addEventListener('click', () =>{
        const resumedetails = document.querySelectorAll('.resume-detail');


        resumebtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumedetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumedetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activeportfolio = () =>{
    const imgslide = document.querySelector('.portfolio-carousel .img-slide');
    const portfoliodetails = document.querySelectorAll('.portfolio-detail')

    imgslide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    portfoliodetails.forEach(detail =>{
        detail.classList.remove('active');
    });

    portfoliodetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 4){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activeportfolio();
});
arrowLeft.addEventListener('click', () => {
    if (index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activeportfolio();
});
