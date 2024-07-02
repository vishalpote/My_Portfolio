let menuIcon=document.querySelector('#menu-icons')
let navbar=document.querySelector('.navbar')

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && to<offset+height)
        {
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });


    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);



    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // menuIcon.onclick=()=>{
    //     menuIcon.classList.remove('bx-x');
    //     navbar.classList.remove('active');
    // }

};



ScrollReveal(
    { 
        reset: true,
        distance:'80px',
        duration:2000,
        delay:200
        
    }
    );
    ScrollReveal().reveal('.home-content, .heading' ,{ origin: 'top' });
    ScrollReveal().reveal('.service-cantainer, .portfolio-box, .contact form' ,{ origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1' ,{ origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content' ,{ origin: 'right' });




    const typed=new Typed('.multiple-text',{
        strings:['FullStack Devloper','Javascript Devloper','Backend Devloper'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    });


    const typed1=new Typed('.multiple-text1',{
        strings:['FullStack Devloper','Javascript Devloper','Backend Devloper'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    });