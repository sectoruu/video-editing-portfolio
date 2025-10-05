const cursor = document.querySelector(".cursor-dot");
const interactiveEls = document.querySelectorAll("button, a, input, textarea");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

document.addEventListener("mousedown", () => {
  cursor.classList.add("active");
});
document.addEventListener("mouseup", () => {
  cursor.classList.remove("active");
});

interactiveEls.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});
