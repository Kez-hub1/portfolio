// Declare variable to store navbar element
const navElement = document.getElementById('navbar');
// detect scroll event on document
document.addEventListener("scroll", function () {
//   console.log(window.scrollY);
if (window.scrollY > 70) {
    // change nav bg to blue
    navElement.style.backgroundColor= '#0979E4';
} else {
    // change navbar bg to transparent
     navElement.style.backgroundColor= 'transparent';
}
});