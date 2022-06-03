"use strict";

const form = document.querySelector("form");
const input = document.querySelector("input");
const error = document.querySelector("p.error");
const valid = document.querySelector("p.valid");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input);
  console.log(input.value);
  if (input.value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")) {
    valid.style.display = "block";
    error.style.display = "none";
  } else {
    valid.style.display = "none";
    error.style.display = "block";
  }
});
