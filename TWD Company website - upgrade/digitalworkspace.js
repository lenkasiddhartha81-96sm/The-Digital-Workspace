// ===============================
// SCREENSHOT SLIDER
// ===============================

const screens = [
    "Hero Section",
    "About Us",
    "Services",
    "Portfolio",
    "Testimonials",
    "Contact Section",
    "Mobile View",
    "Tablet View",
    "Animations",
    "Full Page View"
];


let currentScreen = 0;


const screenTitle = document.querySelector(".ss-count");
const screenBox = document.querySelector(".ss-placeholder");

const nextBtn = document.querySelector(".ss-nav span:last-child");
const prevBtn = document.querySelector(".ss-nav span:first-child");


function changeScreen(){

    screenBox.innerHTML = "🖥️ " + screens[currentScreen];

    screenTitle.innerHTML =
    `${currentScreen + 1} / ${screens.length} &nbsp; ${screens[currentScreen]}`;

}


// Next arrow

if(nextBtn){

nextBtn.addEventListener("click",()=>{

    currentScreen++;

    if(currentScreen >= screens.length){
        currentScreen = 0;
    }

    changeScreen();

});

}


// Previous arrow

if(prevBtn){

prevBtn.addEventListener("click",()=>{

    currentScreen--;

    if(currentScreen < 0){
        currentScreen = screens.length - 1;
    }

    changeScreen();

});

}



// ===============================
// CLICK SCREENSHOT LIST
// ===============================


const screenshotItems = document.querySelectorAll(".ss-item");


screenshotItems.forEach((item,index)=>{


item.addEventListener("click",()=>{


    currentScreen = index;

    changeScreen();


    screenshotItems.forEach(i=>{
        i.classList.remove("active");
    });


    item.classList.add("active");


});


});



// ===============================
// FEATURE CARD ANIMATION
// ===============================


const cards = document.querySelectorAll(".feature-card");


window.addEventListener("scroll",()=>{


cards.forEach(card=>{


let top = card.getBoundingClientRect().top;


if(top < window.innerHeight - 80){

card.style.opacity="1";

card.style.transform="translateY(0)";

}


});


});




// ===============================
// NAV BUTTON
// ===============================


const projectBtn = document.querySelector(".nav-btn");


if(projectBtn){

projectBtn.addEventListener("click",()=>{

window.location.href = "index.html#contact";

});

}



// ===============================
// CTA BUTTON
// ===============================


const cta = document.querySelector(".cta-btn");


if(cta){

cta.addEventListener("click",()=>{



});

}