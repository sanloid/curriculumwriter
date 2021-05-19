//TODO перенести в отдельный скрипт рендер документа

renderButton.onclick = function() {
  rendered();
};


document.addEventListener("DOMContentLoaded", ready);

async function ready(){
  var res = await eel.LoadToHTML()();
}

var num_counter = 0, spec_counter = 0, naprav_counter = 0; 

eel.expose(addOption);
function addOption (value){
let newOption = new Option(value , value);
list.append(newOption);
}

eel.expose(addOptionToNum);
function addOptionToNum (value){
let newOption = new Option(value);
number_list.append(newOption);
num_counter += 1;
}

eel.expose(addOptionToSpec);
function addOptionToSpec (value){
let newOption = new Option(value);
spec_list.append(newOption);
spec_counter += 1;
}

eel.expose(addOptionToNaprav);
function addOptionToNaprav (value){
let newOption = new Option(value);
naprav_list.append(newOption);
naprav_counter += 1;
}

async function number_list_change(value){
var specName = await eel.getTheSpec(value)();
document.getElementById("name_direction").value = specName;
}

async function name_spec_list_change(value){
var specNum = await eel.getTheNum(value)();
document.getElementById("number_direction").value = specNum;
}



async function rendered() {
  let programm_discipline = document.getElementById('programm_discipline').value;
  let number_direction = document.getElementById('number_direction').value;
  let name_direction = document.getElementById('name_direction').value;
  let decryption = document.getElementById('decryption').value;
  let list_text = document.getElementById('mark_list').value;
  let res = await eel.render_doc(programm_discipline, number_direction, name_direction, decryption, list_text)();
}

async function nameChange(name){
  document.getElementById("nameDiscToChange").innerHTML = name
}

