//TODO перенести в отдельный скрипт рендер документа
let num_of_list = 0 
renderButton.onclick = function() {
  rendered();
};


document.addEventListener("DOMContentLoaded", ready);

async function ready() {
  var res = await eel.LoadToHTML()();
}

var num_counter = 0, spec_counter = 0, naprav_counter = 0; 

eel.expose(addOption);
function addOption (value) {
  let newOption = new Option(value , value);
  list.append(newOption);
}

eel.expose(addOptionToNum);
function addOptionToNum (value) {
  let newOption = new Option(value);
  number_list.append(newOption);
  num_counter += 1;
}

eel.expose(addOptionToSpec);
function addOptionToSpec (value) {
  let newOption = new Option(value);
  spec_list.append(newOption);
  spec_counter += 1;
}

eel.expose(addOptionToNaprav);
function addOptionToNaprav (value) {
  let newOption = new Option(value);
  naprav_list.append(newOption);
  naprav_counter += 1;
}

async function number_list_change(value) {
  var specName = await eel.getTheSpec(value)();
  document.getElementById("name_direction").value = specName;
}

async function name_spec_list_change(value) {
  var specNum = await eel.getTheNum(value)();
  document.getElementById("number_direction").value = specNum;
}



async function rendered() {

  let arr_field = new Array();

  let i  = 0; 
  while ( i <= num_of_list ) {
    let buf = i 
    var num = "text_area_" + buf.toString();
    let el = document.getElementById(num).value;
    arr_field[i] = el;
    i += 1; 
  }

  arr_field[0] = document.getElementById('text_area_0').value;

  alert(arr_field);

  let programm_discipline = document.getElementById('programm_discipline').value;
  let number_direction = document.getElementById('number_direction').value;
  let name_direction = document.getElementById('name_direction').value;
  let decryption = document.getElementById('decryption').value;
  let res = await eel.render_doc(programm_discipline, number_direction, name_direction, decryption, arr_field)();

}

async function nameChange(name) {

  if ( name == "" ) {
    document.getElementById("nameDiscToChange").innerHTML = "Название дисциплины"  
  }
  else {
    document.getElementById("nameDiscToChange").innerHTML = name
  }

}

async function addField() {

  num_of_list += 1
  document.getElementById("delField").className = "";
  let elements = document.createElement('textarea');
  elements.id = "text_area_" + num_of_list;
  elements.className = "newField field__input"
  text_area_field.append(elements); 

}


async function delField() {

  let b = num_of_list
  if (b > 0) {
    let id_buf = "text_area_" + b.toString();
    let element = document.getElementById(id_buf);
    element.parentNode.removeChild(element)
    num_of_list -= 1;
  }
  if (b == 1) {
    document.getElementById("delField").className = "invisible";
  }

}
