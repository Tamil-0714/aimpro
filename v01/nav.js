let searchBox = document.querySelector(".search-icon")
  searchBox.addEventListener("mouseenter",()=>{
    searchBox.style.backgroundColor = 'black';
    searchBox.innerHTML = `<i class="fa fa-search" aria-hidden="true" style="color:white;"></i>`
})
searchBox.addEventListener("mouseleave", () => {
    searchBox.style.backgroundColor = ''; // Reset to the default background color
    searchBox.innerHTML = `<i class="fa fa-search" aria-hidden="true" style="color:black;"></i>`
});
// let categories = document.querySelector('.categories');
// categories.addEventListener('click',showCategories)
// function showCategories(){
    
// }
let present = false;
let hamburger = document.querySelector(".hamburger")
hamburger.addEventListener('click',()=>{
    if(present){
        hamburger.innerHTML = `<i class="fa-solid fa-bars" style="color: #000000;"></i>`
        present = false;
        document.body.style.height = '200vh'
        document.body.style.overflow = 'auto'
    }
    else{
        hamburger.innerHTML = `<i class="fa-solid fa-x" style="color: #000000;"></i>`
        present = true;
        document.body.style.height = '100vh'
        document.body.style.overflow = 'hidden'
    }
    document.querySelector(".nav-items ul").classList.toggle('slide');
})