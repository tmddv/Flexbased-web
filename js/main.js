const articles =document.querySelectorAll("article");

for(let article of articles){
  article.addEventListener("mouseenter",(e)=>{
    e.currentTarget.querySelector("video").play();
  });
  article.addEventListener("mouseleave",(e)=>{
    e.currentTarget.querySelector("video").pause();
  });
}

const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

for(let item of items){
  item.addEventListener("click",(e)=>{
    let tit = e.currentTarget.querySelector("h2").innerText 
    let txt = e.currentTarget.querySelector("p").innerText
    let vidSrc = e.currentTarget.querySelector("video").getAttribute("src")

    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src",vidSrc);
  
    aside.querySelector("video").play();
    aside.classList.add("on");
    
  })


}


close.addEventListener("click",()=>{
  aside.classList.remove("on");
  aside.querySelector("video").pause();
})
