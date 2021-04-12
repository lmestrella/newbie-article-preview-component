const VW_MEDIUM_PX = 760;

const shareButton = document.querySelector(".article__share-icon");
const sharePanel = document.querySelector("section .article__share");
const authorPanel = document.querySelector(".article__author");

const updateSharePanel = (e) => {
  let floatingSharePanel = document.querySelector("body > .article__share");
  let shareButtonRect = shareButton.getBoundingClientRect();
  floatingSharePanel.style.top = `${shareButtonRect.top - 85}px`;
  floatingSharePanel.style.left = `${shareButtonRect.left - 110}px`;
};

const toggleSharePanel = (e) => {
  let socialsSelector = null;
  let timeDelay = 0.2;

  if (document.documentElement.clientWidth >= VW_MEDIUM_PX) {
    let floatingSharePanel = document.querySelector("body > .article__share");
    updateSharePanel(e);
    floatingSharePanel.classList.toggle("article__share--show");
    socialsSelector = "body > div";
  } else {
    sharePanel.classList.toggle("article__share--show");
    authorPanel.classList.toggle("article__author--hide");
    socialsSelector = "section";
  }

  shareButton.classList.toggle("article__share-icon--dark");
  document
    .querySelectorAll(`${socialsSelector} .article__share-socials`)
    .forEach((social) => {
      social.style.transitionDelay = `${timeDelay}s`;
      social.classList.toggle("article__share-socials--show");
      timeDelay += 0.05;
    });
};

const setupFloatingSharePanel = (e) => {
  let sharePanelClone = sharePanel.cloneNode(true);
  document.querySelector("body").appendChild(sharePanelClone);
};

window.addEventListener("load", setupFloatingSharePanel);
window.addEventListener("resize", updateSharePanel);
shareButton.addEventListener("click", toggleSharePanel);
