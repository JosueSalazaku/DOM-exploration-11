let allImg = document.getElementsByTagName("img");
let allParagraphs = document.getElementsByTagName("p");

for (let i = 0; i < allImg.length; i++) {
  if (!allImg[i].classList.contains("important")) {
    allImg[i].style.display = "none";
    console.log(allImg);
  }
}

for (let allParagraph of allParagraphs) {
  console.log("Content:", allParagraph.textContent);

  if (allParagraph.classList.length > 0) {
    console.log("Class:", allParagraph.classList[0]);
  }
}
