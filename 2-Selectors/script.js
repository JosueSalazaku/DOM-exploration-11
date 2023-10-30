let allImg = document.getElementsByTagName("img");

for (let i = 0; i < allImg.length; i++) {
  if (!allImg[i].classList.contains("important")) {
    allImg[i].style.display = "none";
  }
}
