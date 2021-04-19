renderButton.onclick = function() {
    rendered();
};


async function rendered(){
    // чтение имя дисциплины 
    let name_disc = document.getElementById('discName').value;
    // в петон, из питона ничо получать не надо (пока что вроде как)
    let res = await eel.render_doc(name_disc)();
}
