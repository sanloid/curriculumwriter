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



var colors = ['1abc9c', '2c3e50', '2980b9', '7f8c8d', 'f1c40f', 'd35400', '27ae60'];

colors.each(function (color) {
  $$('.color-picker')[0].insert(
    '<div class="square" style="background: #' + color + '"></div>'
  );
});

$$('.color-picker')[0].on('click', '.square', function(event, square) {
  background = square.getStyle('background');
  $$('.custom-dropdown select').each(function (dropdown) {
    dropdown.setStyle({'background' : background});
  });
});
