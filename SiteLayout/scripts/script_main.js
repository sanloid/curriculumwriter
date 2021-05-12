let btn_xls = document.querySelector("#xls-button");
let btn_oop = document.querySelector("#oop-button");
let block = document.querySelector("#continue");

btn_xls.addEventListener("click", choiceFileExcel);
btn_oop.addEventListener("click", choiceFileOOP);

var isExcel = false , isOOP = false 

function getVisionToNextPageButton(){
	block.classList.remove("invisible")
	block.classList.add("visible")
	btn_xls.classList.remove("orange-color")
	btn_xls.classList.add("blue-color")
	btn_oop.classList.remove("orange-color")
	btn_oop.classList.add("blue-color")
	loadAllDiscLists()
}

async function loadAllDiscLists(){
	let res = await eel.loadDiscLists()();
}


async function choiceFileExcel(){
	let res = await eel.FileChoiceExcel()();
	if (res != ""){
		isExcel = true 
	}
	if(isExcel && isOOP){
		getVisionToNextPageButton()
	}
}

async function choiceFileOOP(){
	let res = await eel.FileChoiceOOP()();
	if (res != ""){
		isOOP = true
	}
	if(isExcel && isOOP){
		getVisionToNextPageButton()
	}
}

