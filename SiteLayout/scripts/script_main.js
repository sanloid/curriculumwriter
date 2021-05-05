let btn_xls = document.querySelector("#xls-button");
let btn_oop = document.querySelector("#oop-button");
let block = document.querySelector("#continue");

btn_xls.addEventListener("click", function() {
	block.classList.remove("invisible")
	block.classList.add("visible")
	btn_xls.classList.remove("orange-color")
	btn_xls.classList.add("blue-color")
	btn_oop.classList.remove("orange-color")
	btn_oop.classList.add("blue-color")
});

