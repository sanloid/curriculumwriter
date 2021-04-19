renderButton.onclick = function() {
    rendered();
};


async function rendered(){
    // чтение имя дисциплины 
    let name_disc = document.getElementById('discName').value;
    alert(name_disc);
    let res = await eel.render_doc(name_disc)();
}
