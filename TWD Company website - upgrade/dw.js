const cards = document.querySelectorAll(".project-card");

function checkCards(){
  cards.forEach(card=>{
    if(card.getBoundingClientRect().top < window.innerHeight - 100){
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkCards);
window.addEventListener("load", checkCards);
checkCards();

cards.forEach(card=>{
  card.addEventListener("mousemove",(e)=>{
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top - r.height/2;
    card.style.transform = `translateY(-10px) scale(1.03) rotateX(${-y/18}deg) rotateY(${x/18}deg)`;
  });
  card.addEventListener("mouseleave",()=>{
    card.style.transform="";
  });
});