"use strict";

const menuButtonShow = document.querySelector(".header__menu-button--show");
const menuButtonHide = document.querySelector(".header__menu-button--hide");
const menuContent = document.querySelector(".header__menu-content");

menuButtonShow.addEventListener("click", () => {
    menuContent.classList.add("visible");
});
menuButtonHide.addEventListener("click", () => {
    menuContent.classList.remove("visible");
});
