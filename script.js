const book = $(".book-cover");
const leftBtn = $(".left-btn");
const rightBtn = $(".right-btn");
var position = 0;
book.css("transform", `translateX(calc(100vw / -14))`);
book.css("transform", `translateX(calc(calc(100vw/14) * ${position - 1}))`);
const container = document.getElementById("a");

container.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    position -= event.deltaX/10;
    if (Math.floor(position / (window.innerWidth / 7)) < -6) {
      position += event.deltaX/10;
    }
    if (Math.floor(position / (window.innerWidth / 7)) > 0) {
      position = 0;
    }
    book.css(
      "transform",
      `translateX(calc(calc(100vw/14) * ${
        Math.floor(position / (window.innerWidth / 7)) * 2 - 1
      }))`
    );
  },
  { passive: false }
);
