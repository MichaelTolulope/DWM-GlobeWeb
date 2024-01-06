        // nav bar toggle
        var toggle = document.getElementById("toggler");
        const nav = document.querySelector(".nav-bar");
        const list = document.querySelector("#list");
        function toggleFunction(x) {
        x.classList.toggle("change");
        list.classList.toggle("list-container");
        nav.classList.toggle("nav");
}
    // nav bar onscroll animation effect
document.addEventListener('scroll',()=>{
    if(window.scrollY > 10){
        nav.classList.add("nav-bar-scrolled");
    }
    else{
        nav.classList.remove("nav-bar-scrolled");
    }
});

    //carousel btns slide effect

    const slider = document.querySelector(".carousel-slider");

    const carouselBtnRight = document.querySelector(".right");
    const carouselBtnLeft = document.querySelector(".left");
    const indicatorParent = document.querySelector('.controls ul');


    var sectionIndex =  0;


    carouselBtnRight.addEventListener('click',()=>{
        document.querySelector('.controls .selected-slider-indicator').classList.remove('selected-slider-indicator');
        sectionIndex = (sectionIndex<2)?sectionIndex+1:2;
        indicatorParent.children[sectionIndex].classList.add('selected-slider-indicator');
        slider.style.transform='translate('+(sectionIndex)*-33.33+'%)'

    });

    carouselBtnLeft.addEventListener('click',()=>{
        document.querySelector('.controls .selected-slider-indicator').classList.remove('selected-slider-indicator');
        sectionIndex = (sectionIndex>0)?sectionIndex-1:0;    
        indicatorParent.children[sectionIndex].classList.add('selected-slider-indicator');
        slider.style.transform='translate('+(sectionIndex)*-33.33+'%)'

    })

    //slider indicator

document.querySelectorAll('.controls ul li').forEach(function(indicator,ind){
sectionIndex = ind;
    indicator.addEventListener('click',function(){
        document.querySelector('.controls .selected-slider-indicator').classList.remove('selected-slider-indicator');
        indicator.classList.add('selected-slider-indicator')
        slider.style.transform='translate('+(ind)*-33.33+'%)'

    })
});

function fetchPage(pageName){

    fetch(pageName + ".html").then(respnse => respnse.text())
    .then(html => {
        document,querySelector('.content').innerHTML = html;
    })
    .catch(error=>console.error('Error: ',error));
}
    

function switchPage(pageName){
    history.pushState({},"", pageName + ".html");
    fetchPage(pageName);
}