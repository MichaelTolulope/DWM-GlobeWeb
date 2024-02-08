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

const style = window.getComputedStyle(slider)
const matrix = style['transform'] || style.webkitTransform || style.mozTransform 




// function fetchPage(pageName){

//     fetch(pageName + ".html").then(respnse => respnse.text())
//     .then(html => {
//         document,querySelector('.content').innerHTML = html;
//     })
//     .catch(error=>console.error('Error: ',error));
// }
    

function switchPage(pageName){
    history.pushState({},"", pageName + ".html");
    fetchPage(pageName);
}


//Handling paments with paystack

const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_xxxxxxxxxx', // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}