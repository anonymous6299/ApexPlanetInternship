window.addEventListener("resize",()=>{
    const nav = document.getElementById("nav-sm")
    if (window.innerWidth<=483) {
        nav.style.display="block";
    }
    else{
        nav.style.display="none";
    }
})
const toggleNav = () => {
    const nav = document.getElementById("nav-sm")
    if (nav.style.display==="block") {
        nav.style.display="none"
    }
    else{
        nav.style.display="block"
    }
}