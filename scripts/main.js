"use strict"
let ul = document.querySelector("ul");
let h1 = document.querySelector("h1");
ul.addEventListener("click", (e)=>{
	let text = e.target.textContent;
	h1.textContent = text;
	console.log(text);
});