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
    DsIcon.classList.toggle("rotate-180");
});


const AdminMenu = document.getElementById("adminMenu");
const AdminIcon = document.getElementById("adminIcon");
const AdMenu = document.getElementById("adMenu");

AdminMenu.addEventListener("click",()=>{
    AdMenu.classList.toggle("hidden");
    AdminIcon.classList.toggle("rotate-180");
});

