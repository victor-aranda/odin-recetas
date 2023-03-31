"use strict";

const langEs = document.querySelectorAll('[lang="es"]:not(html)');
const langEn = document.querySelectorAll('[lang="en"]:not(html');
let currentLang = "es";
const buttonLang = document.getElementById("switch-lang");

changeLang(langEs,"inline");  
changeLang(langEn,"none");

function changeLang(lang, value){
  for(let i = 0; i < lang.length; i++) {
    lang[i].style.display  = value;
  }
}

buttonLang.addEventListener("click",() => {
  if(currentLang == "es"){
    changeLang(langEn,"inline");
    changeLang(langEs,"none");
    currentLang = "en";
  } else if(currentLang == 'en'){
    changeLang(langEs,"inline");  
    changeLang(langEn,"none");
    currentLang = "es";
  }
})
