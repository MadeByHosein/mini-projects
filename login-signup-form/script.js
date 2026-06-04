const container = document.querySelector(".container");

document.querySelector(".to-register").onclick = () => {
  container.classList.add("active");
};

document.querySelector(".to-login").onclick = () => {
  container.classList.remove("active");
};