const shareButton = document.querySelector(".article__share-icon");

const shareSocials = document.querySelectorAll(".article__share-socials");

const toggleSharePanel = (e) => {
  document
    .querySelector(".article__share")
    .classList.toggle("article__share--show");

  document
    .querySelector(".article__author")
    .classList.toggle("article__author--hide");

  document
    .querySelector(".article__share-icon")
    .classList.toggle("article__share-icon--dark");

  shareSocials.forEach((social) => {
    social.classList.toggle("article__share-socials--show");
  });
};

shareButton.addEventListener("click", toggleSharePanel);
