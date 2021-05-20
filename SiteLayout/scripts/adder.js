let num = 1 
async function addField(){
    //test.before("<textarea></textarea>")
    let liFirst = document.createElement('textarea');
    liFirst.id = "text_area_" + num;
    //liFirst.innerHTML = 'prepend';
    text_area_0.append(liFirst); // вставить liFirst в начало <ol>
    num += 1
}