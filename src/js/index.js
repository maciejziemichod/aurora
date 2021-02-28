"use strict";

const menuButtonShow = document.querySelector(".header__menu-button--show");
const menuButtonHide = document.querySelector(".header__menu-button--hide");
const menuContent = document.querySelector(".header__menu-content");

const searchButtonShow = document.querySelector(".header__search-button--show");
const searchButtonHide = document.querySelector(".header__search-button--hide");
const searchFormContainer = document.querySelector(
    ".header__search-form-container"
);

menuButtonShow.addEventListener("click", () => {
    menuContent.classList.add("visible");
});
menuButtonHide.addEventListener("click", () => {
    menuContent.classList.remove("visible");
});

searchButtonShow.addEventListener("click", () => {
    searchFormContainer.classList.add("visible");
});
searchButtonHide.addEventListener("click", () => {
    searchFormContainer.classList.remove("visible");
});
