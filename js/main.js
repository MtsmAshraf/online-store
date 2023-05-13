let mainBurgerIcon = document.querySelector("header .main-burger-icon");
let headerLinks = document.querySelector("header .links");
let headerAnchorLinks = document.querySelectorAll("header .links nav a");
let smallScreenIcon = document.querySelector("header .small-screen-icon");
let headerLinksShownn = false;
mainBurgerIcon.onclick = () => {
    if(!headerLinksShownn) {
        headerLinks.style.cssText = `
            transform: translateX(0%);
        `
        mainBurgerIcon.querySelector("span:nth-child(1)").style.cssText = `
            transform: rotateZ(45deg) ;
        `;
        mainBurgerIcon.querySelector("span:nth-child(2)").style.cssText = `
            width:0px;
        `
        mainBurgerIcon.querySelector("span:nth-child(3)").style.cssText = `
            transform: rotateZ(-45deg) ;
        `;
        headerLinksShownn = true;
    }else{
        headerLinks.style.cssText = `
            transform: translateX(200%);
        `
        mainBurgerIcon.querySelector("span:nth-child(1)").style.cssText = `
            transform: rotateZ(0deg) ;
        `;
        mainBurgerIcon.querySelector("span:nth-child(2)").style.cssText = `
            width:20px;
        `
        mainBurgerIcon.querySelector("span:nth-child(3)").style.cssText = `
            transform: rotateZ(-0deg) ;
        `;
        headerLinksShownn = false;
    }
}
smallScreenIcon.onclick = () => {
    console.log("small")
    document.querySelector("header .links nav").classList.toggle("active");
    console.log(document.querySelector("header .links nav").classList)
}
headerAnchorLinks.forEach((a) => {
    a.onclick = () => {
        console.log("Anchor")
        document.querySelector("header .links nav").classList.remove("active");
    } 
})
let sliderBullets = document.querySelectorAll(".intro .slider .bullets li")
let sliderIndex = document.querySelector(".intro .index span")
let sliderNews = document.querySelectorAll(".intro .slider .news")
let bulletsIndex = 0;
sliderBullets.forEach((bullet,index) => {
    bullet.onclick = () => {
        sliderBullets.forEach((bullet) => {
            bullet.classList.remove("active")
        })
        bulletsIndex = index;
        bullet.classList.add("active")
        sliderIndex.textContent = `0${index + 1}`;
        sliderNews.forEach((news) => {
            news.style.cssText = `
                transform: translateX(-${100 * index}%)
            `;
        })
    }
})
setInterval(() => {
    if(bulletsIndex >= sliderBullets.length){
        bulletsIndex = 0;
    }else{
        sliderBullets[bulletsIndex].click();
        bulletsIndex++
    }
}, 3000);

let categoriesList = document.querySelectorAll(".trending ul li")
let imgsGroups = document.querySelectorAll(".trending .imgs-group")
categoriesList.forEach((li,index) => {
    li.onclick = () => {
        categoriesList.forEach((li) => {
            li.classList.remove("active")
        })
        li.classList.add("active")
        imgsGroups.forEach((group) => {
            group.classList.remove("active")
        })
        imgsGroups[index].classList.add("active")
    }
})