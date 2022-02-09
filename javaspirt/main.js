const openLoginbtn = document.querySelector('.js__open-login');
const openRegisterbtn = document.querySelector('.js__open-register');
const modal = document.querySelector('.modal');
const closeBtns = document.querySelectorAll('.js-auth-form__close');
const login = document.querySelector('.modal__login-body');
const register = document.querySelector('.modal__register-body');
const transferLogin = document.querySelector('.js__auth-form--login');
const transferRegister = document.querySelector('.js__auth-form-register');
const modalclose = document.querySelector('.modal');
const closeModal = document.querySelector('.js__close-modal');
const logOutBtn = document.querySelector('.js-navbar-logout');
const account = document.querySelector('.header__navbar-account');
const loginBtn = document.querySelector('.js-btn-login');
const registerBtn = document.querySelector('.js-register');
const outside = document.querySelector('.header__select-outside');
const inShop = document.querySelector('.header__select-in');
const inShopCheck = document.querySelector('.header__search-select-in');
const outstideCheck = document.querySelector('.header__search-select-outside');
const outStideItem = document.querySelector('.header__select-item-outside');
const inShopItem = document.querySelector('.header__select-item-inShop');
var accountEmail = document.getElementById('account-email');
var accountPassword = document.getElementById('account-password');


function openRegister() {
    modal.classList.add('open');
    register.classList.add('open');
}

function openLogin() {
    modal.classList.add('open');
    login.classList.add('open');
}

function transferLoginforRegister() {
    register.classList.remove('open');
    login.classList.add('open');
}

function loginAccount() {
    account.classList.add('header__navbar-logged');
    account.classList.remove('header__navbar-noLogin');
    modal.classList.remove('open');
    login.classList.remove('open');
}

function logOutAccount() {
    account.classList.add('header__navbar-noLogin');
    account.classList.remove('header__navbar-logged');
}

function transferRegisterforLogin() {
    login.classList.remove('open');
    register.classList.add('open');
}

function close() {
    modal.classList.remove('open');
    login.classList.remove('open');
    register.classList.remove('open');
}

function searchInShop() {
    inShopItem.classList.add('header__select-check-stand');
    outstideCheck.classList.remove('block');
    inShopCheck.classList.add('block');
    outStideItem.classList.remove('header__select-check-stand');
}

function searchOutshop() {
    inShopItem.classList.remove('header__select-check-stand');
    outstideCheck.classList.add('block');
    inShopCheck.classList.remove('block');
    outStideItem.classList.add('header__select-check-stand');
}

function signUpNone() {
    alert('trang không có thuộc tính đăng kí xin vui lòng quay lại sau hoặc qua đăng nhập để thực hiên thao tác với tài khoản:admin;mật khẩu :admin');
}
openLoginbtn.addEventListener('click', openLogin);

closeModal.addEventListener('click', close);

openRegisterbtn.addEventListener('click', openRegister);

transferLogin.addEventListener('click', transferLoginforRegister);

transferRegister.addEventListener('click', transferRegisterforLogin);
for (const closeBtn of closeBtns) {
    closeBtn.addEventListener('click', close);
}
logOutBtn.addEventListener('onhover', logOutAccount);

loginBtn.addEventListener('click', loginAccount);

outside.addEventListener('click', searchOutshop);

inShop.addEventListener('click', searchInShop);
registerBtn.addEventListener('click', signUpNone);