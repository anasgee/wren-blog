'use strict';

// Add Event Listener on multiple events

const addEventOnElements =(elements,eventType,callback)=>{
    for(let i=0 ,len=elements.length; i<len;i++){
        elements[i].addEventListener(eventType,callback);
    }

}

                    //  Mobile NavBar Toggler
const navbar=document.querySelector("[data-navbar]");
// const navTogglers=document.querySelectorAll("nav-close-btn");
const navTogglers=document.querySelectorAll("[data-nav-toggler]");


const toggleNav=()=>{
   navbar.classList.toggle("active");
   document.body.classList.toggle("nav-active")
}
addEventOnElements(navTogglers,"click", toggleNav)
// Mobile NavBar End




// Header Scroll
const header= document.querySelector("[data-header]");
const backToTop=document.querySelector("[data-back-top-btn]");



window.addEventListener("scroll",()=>{ 
    if(window.scrollY > 100){
        header.classList.add("active");
        backToTop.classList.add("active")
      
    }else{
        header.classList.remove("active");
        backToTop.classList.remove("active");


    }
});

// const topics = document.querySelector("[data-topics]");
// window.addEventListener("scroll",()=>{
//     if(window.scroll){
//         topics.classList.add("active")
//     }else{
//         topics.classList.remove("active")  
//     }
    
//     // topics.scrollIntoView({behaviour:"smooth "})
// })

// Carousel

const slider=document.querySelector("[data-slider]");
const sliderContainer=document.querySelector("[data-slider-container]");
const sliderPrevButton=document.querySelector("[data-slider-prev]");
const sliderNextButton=document.querySelector("[data-slider-next]");

let totalSliderVisibleItems=Number(getComputedStyle(slider).getPropertyValue("--slider-items"));

let totalSlidableItems=sliderContainer.childElementCount-totalSliderVisibleItems;

let currSlidePos=0;

const moveSliderItem=()=>{
    return sliderContainer.style.transform=`translateX(-${sliderContainer.children[currSlidePos].offsetLeft}px)`;
}

// Next Slide Function;

const nextSlide=()=>{
    const slideEnd=currSlidePos >= totalSlidableItems;
    if(slideEnd){
        currSlidePos=0; 
    }else{
        currSlidePos++;
    }
    moveSliderItem();
};
sliderNextButton.addEventListener("click",nextSlide)


// Next Previous Function;

const prevSlide=()=>{
    if(currSlidePos<=0){
        currSlidePos=totalSlidableItems;
    }else{
        currSlidePos--;
    }
    moveSliderItem();
};
sliderPrevButton.addEventListener("click",prevSlide)



// 