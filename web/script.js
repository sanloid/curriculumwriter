renderButton.onclick = function() {
    rendered();
};


async function rendered() {
    // чтение данных
    let programm_discipline = document.getElementById('programm_discipline').value;
    let number_direction = document.getElementById('number_direction').value;
    let name_direction = document.getElementById('name_direction').value;
    let decryption = document.getElementById('decryption').value;
    // в петон, из питона ничо получать не надо (пока что вроде как)
    let res = await eel.render_doc(programm_discipline, number_direction, name_direction, decryption)();
}


