// const text = "I made this just for you. Every line, every color, every word is a piece of my heart.";
// let index = 0;

// function typeWriter() {
//   if (index < text.length) {
//     document.getElementById("note").innerHTML += text.charAt(index);
//     index++;
//     setTimeout(typeWriter, 60);
//   }
// }

// function revealMore() {
//   document.getElementById("more").classList.remove("hidden");
// }
 
// window.onload = typeWriter;
// function revealMore() {
//     const more = document.getElementById("more");
//     if (more) {
//       more.classList.remove("hidden");
//     }
//   }
const text = "I made this just for you. Every line, every color, every word is a piece of my heart.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("note").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 60);
  }
}

window.onload = typeWriter;

function revealMore() {
  const more = document.getElementById("more");
  const button = document.querySelector("button"); // change to getElementById if needed

  if (more) {
    more.classList.remove("hidden");
  }

  if (button) {
    button.style.display = "none";
  }
}


