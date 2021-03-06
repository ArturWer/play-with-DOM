"use strict"
let ul = document.querySelector("ul");
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let i = 1;
ul.addEventListener("click", (e)=>{
	let text = e.target.textContent;
	let listItems = document.querySelectorAll("ul>li");
	h1.textContent = text;
	ul.className = "";
	listItems.forEach((elem)=>{
		elem.className = "";
	});
	e.target.className = "active";
	console.log(text);
});

btn.addEventListener("click", (e)=>{
	e.preventDefault();
	let li = document.createElement("li");
	li.textContent = `New item ${i++}`;
	ul.appendChild(li);
});