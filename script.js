let skills = document.getElementById("nav2");
let projects = document.getElementById("nav3");
let contactus = document.getElementById("nav4");
let contactbtn = document.querySelector('.Contactbtn');
let hamburger = document.querySelector('.humburger');
skills.addEventListener("click", () => {
    console.log("clicked");
    document.querySelector('.head1').scrollIntoView({ behavior: 'smooth' });
});

projects.addEventListener("click", () => {
    console.log("Projects clicked");
    document.querySelector('.head1 p').scrollIntoView({ behavior: 'smooth' });
});

contactus.addEventListener("click", () => {
    console.log("Contact Us clicked");
    document.querySelector('.head1 b').scrollIntoView({ behavior: 'smooth' });
});
contactbtn.addEventListener("click", ()=>{
    document.querySelector('.head1 b').scrollIntoView({ behavior: 'smooth' });
})
var typed = new Typed(".autotyped",{
    strings: ["Web Developer", "Frontend Developer"],
    typeSpeed: 140,
    backSpeed:50,
    loop: true
})
hamburger.addEventListener("click", ()=>{
    document.querySelector('.hamb').style.right='0';
    document.querySelector('.close').style.display='block';
})
document.querySelector('.close').addEventListener("click", ()=>{
    document.querySelector('.hamb').style.right='100%';
    document.querySelector('.close').style.display='none';
})