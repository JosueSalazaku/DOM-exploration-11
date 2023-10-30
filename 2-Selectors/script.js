let allImg = document.getElementsByTagName("img");
let allParagraphs = document.getElementsByTagName("p");

for (let i = 0; i < allImg.length; i++) {
  if (!allImg[i].classList.contains("important")) {
    allImg[i].style.display = "none";
    console.log(allImg);
  }
}

for (let i = 0; i < allParagraphs.length; i++) {}
