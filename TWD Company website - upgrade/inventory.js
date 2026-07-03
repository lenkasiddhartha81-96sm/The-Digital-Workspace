
// ===============================
// SCROLL ANIMATION
// ===============================


const cards = document.querySelectorAll(".feature-card");


window.addEventListener("scroll",()=>{


cards.forEach(card=>{


let position = card.getBoundingClientRect().top;


if(position < window.innerHeight - 50){

card.style.opacity="1";

card.style.transform="translateY(0)";


}


});


});




// ===============================
// NAV BUTTON ALERT
// ===============================


const startBtn = document.querySelector(".nav-btn");


if(startBtn){

startBtn.addEventListener("click",()=>{

window.location.href = "index.html#contact";

});

}




// ===============================
// CTA BUTTON
// ===============================


const ctaBtn=document.querySelector(".cta-btn");


if(ctaBtn){

ctaBtn.addEventListener("click",()=>{



});

}
const screenshots = [
    { title: "Dashboard", img: "assets/dashboard.png" },
    { title: "Product Management", img: "assets/product-management.png" },
    { title: "Supplier Management", img: "assets/supplier-management.png" },
    { title: "Purchase Entry", img: "assets/purchase-entry.png" },
    { title: "Sales Entry", img: "assets/sales-entry.png" },
    { title: "Stock Ledger", img: "assets/stock-ledger.png" },
    { title: "Stock Calculation", img: "assets/stock-calculation.png" },
    { title: "Monthly Reports", img: "assets/money-report.png" },
    { title: "Search & Filter", img: "assets/search-filter.png" },
    { title: "Backup & Restore", img: "assets/backup-restore.png" },
    { title: "Settings", img: "assets/settings.png" },
    { title: "Export / Print", img: "assets/export-print.png" }
];

let currentScreenshot = 0;

const mainScreenshot = document.getElementById("mainScreenshot");
const ssCount = document.querySelector(".ss-count");
const ssItems = document.querySelectorAll(".ss-item");
const prevBtn = document.getElementById("prevScreenshot");
const nextBtn = document.getElementById("nextScreenshot");

function showScreenshot(index) {
    currentScreenshot = index;

    mainScreenshot.src = screenshots[index].img;
    mainScreenshot.alt = screenshots[index].title;
    ssCount.textContent = `${index + 1} / 12  ${screenshots[index].title}`;

    ssItems.forEach(item => item.classList.remove("active"));
    ssItems[index].classList.add("active");
}

ssItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        showScreenshot(index);
    });
});

prevBtn.addEventListener("click", () => {
    let newIndex = currentScreenshot - 1;
    if (newIndex < 0) newIndex = screenshots.length - 1;
    showScreenshot(newIndex);
});

nextBtn.addEventListener("click", () => {
    let newIndex = currentScreenshot + 1;
    if (newIndex >= screenshots.length) newIndex = 0;
    showScreenshot(newIndex);
});

