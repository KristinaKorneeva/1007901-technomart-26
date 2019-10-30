var button = document.querySelector(".button-goods-map");
var popup =  document.querySelector(".popup");
var close = popup.querySelector(".button-close-popup");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var mail = popup.querySelector("[name=mail]");
var comment = popup.querySelector("[name=text]");


var isStorageSupport = true;
  var storage = "";

  try {
    storageLogin = localStorage.getItem("login");
    storageMail = localStorage.getItem("mail");
  } catch (err) {
    isStorageSupport = false;
  }


button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  login.focus();
  if (storageLogin) {
    login.value = storageLogin;
    mail.focus();
  }

  if (storageMail) {
    mail.value = storageMail;
    comment.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!login.value || !mail.value || !comment.value) {
    popup.classList.remove("popup-error");
    popup.offsetWidth;
    popup.classList.add("popup-error");
    console.log("Заполни обязательные поля");
  } else {
    popup.classList.remove("popup-show");
    comment.value = "";
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("mail", mail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }
});
