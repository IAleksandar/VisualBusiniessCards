// ============================= MENU ===========================

let navLinks = document.getElementById("navLinks");
        function showMenu() {
            navLinks.style.right = "0";
        }

        function hideMenu() {
            navLinks.style.right = "-200px";

        }

// ======================= JOIN US =======================

        var x = document.getElementById('login');
        var y = document.getElementById('register');
        var z = document.getElementById('btn');
        function register() {
            x.style.left = '-600px';
            y.style.left = '-25px';
            z.style.left = '110px';
        }
        function login() {
            x.style.left = '-15px';
            y.style.left = '450px';
            z.style.left = '0px';
        }

        var modal = document.getElementById('login-form');
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }



// ========================   ABOUT US   =====================

let layer = document.querySelector('.layer');
let description = document.querySelector('.desc');

layer.addEventListener("click",() => {
 if(description.style.display === 'none'){
    description.style.display ='block';
 } 
 else{
    description.style.display='none';
 }
})



let layerTwo = document.querySelector('#layer2');
let descriptionTwo = document.querySelector('.desc2');

layerTwo.addEventListener("click",() => {
 if(descriptionTwo.style.display === 'none'){
    descriptionTwo.style.display ='block';
 } 
 else{
    descriptionTwo.style.display='none';
 }
})



let layerThree = document.querySelector('#layer3');
let descriptionThree = document.querySelector('.desc3');

layerThree.addEventListener("click",() => {
 if(descriptionThree.style.display === 'none'){
    descriptionThree.style.display ='block';
 } 
 else{
    descriptionThree.style.display='none';
 }
})






