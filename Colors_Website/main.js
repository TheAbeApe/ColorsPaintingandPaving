document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel_photo");
    const buttonsHtml=Array.from(items, () => {
        return`<span class="carousel_button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel_nav">
        ${ buttonsHtml.join("")}
    </div>
    `);
    const buttons= carousel.querySelectorAll(".carousel_button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
          // un-select all the items
          items.forEach((item) =>
            item.classList.remove("carousel_photo-selected")
          );
          buttons.forEach((button) =>
            button.classList.remove("carousel_button-selected")
          );
    
          items[i].classList.add("carousel_photo-selected");
          button.classList.add("carousel_button-selected");
        });
      });
    
      // Select the first item on page load
      items[0].classList.add("carousel_photo-selected");
      buttons[0].classList.add("carousel_button-selected");
});
     