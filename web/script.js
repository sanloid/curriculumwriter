renderButton.onclick = function() {
    rendered();
};
var num_counter = 1 , spec_counter = 1; 
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





async function rendered() {
    // чтение данных
    let programm_discipline = document.getElementById('programm_discipline').value;
    let number_direction = document.getElementById('number_direction').value;
    let name_direction = document.getElementById('name_direction').value;
    let decryption = document.getElementById('decryption').value;
    // в петон, из питона ничо получать не надо (пока что вроде как)
    let res = await eel.render_doc(programm_discipline, number_direction, name_direction, decryption)();
}

console.log(disc_list);