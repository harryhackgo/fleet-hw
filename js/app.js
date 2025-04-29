window.addEventListener("resize", () => {
  const img = document.querySelector(".rent__image img");
  if (window.innerWidth <= 650) {
    img.src = "../assets/group2.jpg";
  } else {
    img.src = "../assets/group1.jpg";
  }
});

window.dispatchEvent(new Event("resize"));
