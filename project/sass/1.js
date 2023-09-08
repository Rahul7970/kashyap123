let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick =() =>{
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick =() =>{
    navbar.classList.remove('active');
};
let registerBtn =document.querySelector('.account.form .register-btn');
let loginBtn =document.querySelector('.account.form .register-btn');

registerBtn.onclick = () =>{
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
}