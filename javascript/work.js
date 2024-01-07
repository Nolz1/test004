
const dropButton = document.getElementById('headerswich');

dropButton.addEventListener('click', (e) => {
    const item = document.querySelector('header');
    const part = document.querySelector('nav');

    if(  item.style.width == '50vw'){
        item.style.width = '15vw';
        item.style.backgroundColor = 'transparent';
        item.style.mixBlendMode = 'difference';
        part.style.marginLeft = '-200%';
        
    
    }
    else {
        item.style.width = '50vw';
        part.style.marginLeft = '15vw';
        item.style.backgroundColor = 'var(--col-2-)';
        item.style.mixBlendMode = 'normal';
    }
});

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals1 = document.querySelectorAll(".reveal1");

    for(var i = 0; i < reveals1.length; i++){

        var windowheight = window.innerHeight;
        var revealTop = reveals1[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealTop < windowheight - revealpoint){
            reveals1[i].classList.add('active');
        }
        else{
            reveals1[i].classList.remove('active');
        }
    }
    var reveals2 = document.querySelectorAll(".reveal2");

    for(var i = 0; i < reveals2.length; i++){

        var windowheight = window.innerHeight;
        var revealTop = reveals2[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealTop < windowheight - revealpoint){
            reveals2[i].classList.add('active');
        }
        else{
            reveals2[i].classList.remove('active');
        }
    }
    var reveals3 = document.querySelectorAll(".reveal3");

    for(var i = 0; i < reveals3.length; i++){

        var windowheight = window.innerHeight;
        var revealTop = reveals3[i].getBoundingClientRect().top;
        var revealpoint = 200;

        if(revealTop < windowheight - revealpoint){
            reveals3[i].classList.add('active');
        }
        else{
            reveals3[i].classList.remove('active');
        }
    }
    var reveals4 = document.querySelectorAll(".reveal4");

    for(var i = 0; i < reveals4.length; i++){

        var windowheight = window.innerHeight;
        var revealTop = reveals4[i].getBoundingClientRect().top;
        var revealpoint = 250;

        if(revealTop < windowheight - revealpoint){
            reveals4[i].classList.add('active');
        }
        else{
            reveals4[i].classList.remove('active');
        }
    }
};

function showWork(num){
    const im1 = document.getElementById('work-img1');
    const im2 = document.getElementById('work-img2');
    const im3 = document.getElementById('work-img3');
    const im4 = document.getElementById('work-img4');

    var Is = [im1, im2, im3, im4];

    for(var i = 0; i < Is.length; i++){
        Is[i].classList.remove('show');

        Is[num].classList.add('show');
    }

}

