const navInjector = `<div class="nav-search">
<input
  type="search"
  name="search-bar"
  id="search-bar"
  class=""
  title="search here something about Trichy"
  placeholder="search you looking for"
/>
<div class="search-icon" title="Click to find the result">
  <i class="fa fa-search" aria-hidden="true"></i>
</div>
</div>
<div class="hamburger">
<i class="fa-solid fa-bars" style="color: #000000"></i>
</div>
<div class="nav-items">
<ul class="nav-ul">
  <a href=""><li class="nav-itm" title="Home Page">Home</li></a>
  <!-- <a href=""><li class="nav-itm">Categories</li></a> -->
  <a href="">
    <li class="nav-item dropdown nav-itm">
      <a
        class="nav-link dropdown-toggle show"
        href="javascript:void(0);"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        title="Categories"
        >Categories</a
      >
      <ul
        class="dropdown-menu"
        aria-labelledby="navbarDropdown"
        data-bs-popper="static"
      >
        <li>
          <a class="dropdown-item" title="City Guide" href="#"
            >City Guide</a
          >
        </li>
        <li>
          <a class="dropdown-item" title="Deals &amp; Offers" href="#"
            >Deals &amp; Offers</a
          >
        </li>
        <li>
          <a class="dropdown-item" title="Classified Ads" href="#"
            >Classified Ads</a
          >
        </li>
        <li>
          <a
            class="dropdown-item"
            title="Promote your Business"
            href="#"
            >Promote your Business</a
          >
        </li>
      </ul>
    </li>
  </a>
  <a href=""
    ><li class="nav-itm" title="Know more About Trichy">
      About Trichy
    </li></a
  >
  <a href=""
    ><li class="nav-itm" title="Developer Contact">Contact us</li></a
  >
</ul>
</div>`
document.querySelector("nav").innerHTML = navInjector;
let searchBox = document.querySelector(".search-icon")
  searchBox.addEventListener("mouseenter",()=>{
    searchBox.style.backgroundColor = 'black';
    searchBox.innerHTML = `<i class="fa fa-search" aria-hidden="true" style="color:white;"></i>`
})
searchBox.addEventListener("mouseleave", () => {
    searchBox.style.backgroundColor = ''; // Reset to the default background color
    searchBox.innerHTML = `<i class="fa fa-search" aria-hidden="true" style="color:black;"></i>`
});
let present = false;
let hamburger = document.querySelector(".hamburger")
hamburger.addEventListener('click',()=>{
    if(present){
        hamburger.innerHTML = `<i class="fa-solid fa-bars" style="color: #000000;"></i>`
        present = false;
        // document.body.style.height = '200vh'
        document.body.style.overflow = 'auto'
    }
    else{
        hamburger.innerHTML = `<i class="fa-solid fa-x" style="color: #000000;"></i>`
        present = true;
        
        document.body.style.overflow = 'hidden'
    }
    document.querySelector(".nav-items ul").classList.toggle('slide');
})