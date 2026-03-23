const menu = document.getElementById("appMenu")
const submenu = document.getElementById("subMenu")
const arrow = document.getElementById("arrowIcon")


console.log(menu,submenu,arrow)
menu.addEventListener("click",()=>{
    submenu.classList.toggle("hidden");

    arrow.classList.toggle("rotate-180")
});



const callMenu = document.getElementById("callMenu");
  const callSubMenu = document.getElementById("callSubMenu");
  const callArrow = document.getElementById("callArrow");

  callMenu.addEventListener("click", () => {
    callSubMenu.classList.toggle("hidden");
    callArrow.classList.toggle("rotate-180");
  });

const DasMenu = document.getElementById("dasMenu");
const DsIcon = document.getElementById("dsIcon");
const DsMenu = document.getElementById("dsMenu");

DasMenu.addEventListener("click",()=>{
    DsMenu.classList.toggle("hidden");
    DsIcon.classList.toogle("rotate-180");
});


const adminMenu = document.getElementById("adminMenu");
const adminIcon = document.getElementById("adminIcon");
const adMenu = document.getElementById("adMenu");

adminMenu.addEventListener("click",()=>{
    adMenu.classList.toggle("hidden");
    adminIcon.classList.toogle("rotate-180");
});

const slider = document.getElementById("slider");

  let scrollAmount = 0;
  const cardWidth = 340;

  // BUTTON SLIDE
  function slideRight() {
    scrollAmount += cardWidth;

    if (scrollAmount > slider.scrollWidth - 900) {
      scrollAmount = 0;
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }

  function slideLeft() {
    scrollAmount -= cardWidth;
    if (scrollAmount < 0) scrollAmount = 0;

    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }

  // AUTO SLIDE
  setInterval(slideRight, 3000);

  // DRAG FUNCTION
  let isDragging = false;
  let startX;
  let currentTranslate = 0;
  let prevTranslate = 0;

  slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
    slider.classList.add("cursor-grabbing");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const move = e.pageX - startX;
    currentTranslate = prevTranslate + move;

    slider.style.transform = `translateX(${currentTranslate}px)`;
  });

  slider.addEventListener("mouseup", () => {
    isDragging = false;
    prevTranslate = currentTranslate;
    slider.classList.remove("cursor-grabbing");
  });

  slider.addEventListener("mouseleave", () => {
    isDragging = false;
    prevTranslate = currentTranslate;
    slider.classList.remove("cursor-grabbing");
  });


