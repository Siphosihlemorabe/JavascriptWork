document.addEventListener("DOMContentLoaded", () => {
  const titleElements = document.querySelectorAll(".title");
  const myTextElements = document.querySelectorAll(".myText");

  titleElements.forEach((title) => {
    title.addEventListener("click", () => {
      hideAllMyText(); // Remove 'active' class from all myText elements
      const nextSibling = title.nextElementSibling;
      if (nextSibling) {
        nextSibling.classList.toggle("active");
      }
    });
  });

  function hideAllMyText() {
    myTextElements.forEach((text) => {
      text.classList.remove("active");
    });
  }
});
