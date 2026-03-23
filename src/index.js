document.querySelector(".btn-1").addEventListener("click",function(){
    document.getElementById('dashboard-img').src = "../images/dashboard-01.webp";
    document.querySelectorAll(".btns").forEach(btn=>{
        btn.classList.remove('bg-orange-500','text-white')
        btn.classList.add('bg-white','text-black')
    })
    this.classList.remove('bg-white','text-black');
    this.classList.add('bg-orange-500','text-white');
    e.preventDefault();
});

document.querySelector(".btn-2").addEventListener("click",function(){
    
    document.getElementById('dashboard-img').src = "../images/dashboard-02.webp";
    document.querySelectorAll(".btns").forEach(btn=>{
        btn.classList.remove('bg-orange-500','text-white')
        btn.classList.add('bg-white','text-black')
    })
    this.classList.remove('bg-white','text-black')
    this.classList.add('bg-orange-500','text-white')
});

document.querySelector(".btn-3").addEventListener("click",function(){
    document.getElementById('dashboard-img').src = "../images/dashboard-03.jpg ";

    document.querySelectorAll('.btns').forEach(btn=>{
        btn.classList.remove('bg-orange-500','text-white')
        btn.classList.add('bg-white','text-black')
    })

    this.classList.remove('bg-white','text-black')
    this.classList.add('bg-orange-500','text-white')
})

document.querySelector(".btn-4").addEventListener("click",function(){
    document.getElementById('dashboard-img').src = "../images/dashboard-04.jpg"

    document.querySelectorAll('.btns').forEach(btn=>{
        btn.classList.remove('bg-orange-500','text-white')
        btn.classList.add('bg-white','text-black')
    })

    this.classList.remove('bg-white','text-black')
    this.classList.add('bg-orange-500','text-white')
})

document.querySelector(".btn-5").addEventListener("click",function(){
    document.getElementById('dashboard-img').src = "../images/dashboard-05.jpg"

    document.querySelectorAll('.btns').forEach(btn=>{
        btn.classList.remove('bg-orange-500','text-white')
        btn.classList.add('bg-white','text-black')
    })
    this.classList.remove('bg-white','text-black')
    this.classList.add('bg-orange-500','text-white')
})

document.getElementById('email').addEventListener("input",function(e){
  console.log(e.target.value);
}
)
const cards = document.querySelectorAll('.card')

document.getElementById('btns-1').addEventListener('click',function(){

    cards.forEach(card=>{
        card.classList.add('hidden');
    })

   document.querySelectorAll('.application').forEach(card=>{
    card.classList.remove('hidden');
   });

   
  document.querySelectorAll('.btns').forEach(btn=>{
    btn.classList.remove('bg-orange-500','text-white')
    btn.classList.add('bg-white','text-black')
  });
    
    this.classList.remove('bg-white','text-black')
    this.classList.add('bg-orange-500','text-white')
    
});

document.getElementById('btns-2').addEventListener('click',function(){

    cards.forEach(card=>{
        card.classList.add('hidden');
    })

   document.querySelectorAll('.crm').forEach(card=>{
    card.classList.remove('hidden');
   });


 document.querySelectorAll('.btns').forEach(btn=>{
        btn.classList.remove('bg-orange-500','text-white')
        btn.classList.add('bg-white','text-black')
    })
    this.classList.remove('bg-white','text-balck')
    this.classList.add('bg-orange-500','text-white')
});

document.getElementById('btns-3').addEventListener('click',function(){
    cards.forEach(card=>{
        card.classList.add('hidden');
    })

    document.querySelectorAll('.authentication').forEach(card=>{
        card.classList.remove('hidden')
    })


document.querySelectorAll('.btns').forEach(btn=>{
    btn.classList.remove('bg-orange-500','text-white')
    btn.classList.add('bg-white','text-black')
});
  this.classList.remove('bg-white','text-black')
   this.classList.add('bg-orange-500','text-white')
})

document.getElementById('btns-4').addEventListener('click',function(){
    cards.forEach(card=>{
        card.classList.add('hidden');
    })

    document.querySelectorAll('.module').forEach(card=>{
        card.classList.remove('hidden')
    })
document.querySelectorAll('.btns').forEach(btn=>{
    btn.classList.remove('bg-orange-500','text-white')
    btn.classList.add('bg-white','text-black')
});
  this.classList.remove('bg-white','text-black')
   this.classList.add('bg-orange-500','text-white')
})


document.querySelector('.fa-paper-plane').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('email').value=" ";
})

const buttons = document.querySelectorAll(".accordian-btn");

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const targetId = button.dataset.target;
        const content = document.getElementById(targetId);
        const icon = button.querySelector("i");
        
        content.classList.toggle("hidden")
        if(icon.classList.contains("fa fa-chevron-circle-down")){
        icon.classList.remove("fa fa-chevron-circle-down")
        icon.classList.add("fad fa-chevron-circle-up")
        } else{
        icon.classList.add("fa fa-chevron-circle-down")
        icon.classList.remove("fad fa-chevron-circle-up")
        }
    })
})

const header  = document.querySelector("header");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 50){
    header.classList.remove("max-w-7xl","mx-auto","mt-6")
    header.classList.add("w-full","rounded-none")
    }else{
       header.classList.add("max-w-7xl","mx-auto","mt-6")
       header.classList.remove("w-full","rounded-none") 
    }
})

const cardds = document.querySelectorAll(".card");

cardds.forEach(card => {
  card.addEventListener("click",()=>{

    const target = card.dataset.target;

    // hide main cards section
    document.getElementById("inner").classList.add("hidden");

    // show selected page
    document.getElementById(target).classList.remove("hidden");

  });
});

document.getElementById('email').addEventListener("input",function(e){
  console.log(e.target.value);
}
)


const menuBtn = document.getElementById("menuBtn")
const closeBtn = document.getElementById("clsbtn");
const Sidebar = document.getElementById("sidebar")

menuBtn.addEventListener("click",()=>{
    Sidebar.classList.remove("right-[-100%]");
    Sidebar.classList.add("right-0");
})

closeBtn.addEventListener("click",()=>{
    Sidebar.classList.add("right-[-100%]");
    Sidebar.classList.remove("right-0");
})

