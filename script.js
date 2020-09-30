/*
1) Добавьте на HTML-страницу текстовую область, куда пользователь должен будет вставлять произвольный текст, и кнопку «Отправить».
2) Когда пользователь нажмёт на кнопку «Отправить», считайте текст из текстовой области и запишите в переменную.
3) Создайте массив, куда запишите все слова из текста.
4) Создайте Map, где ключом будет слово, а значением число его вхождений в текст.
5) Выведите Map с помощью элементов <ul> и <li> на страницу в таком формате: <ul><li>Слово «дом»: 20</li><li>Слово «я»: 15</li><li>Слово «лес»: 3</li></ul>.
*/
"use strict";

function sendMessage(event) {
    let text = document.querySelector('textarea').value.toLowerCase();
    let map = new Map();

    let words = text.split(/\s|\!|\.|\?|,/g);
    if (words[words.length - 1] == '') words.splice(words.length - 1, 1);
    for (let w of words) {
        if (w == '') continue;
        if (map.has(w)) {
            let s = map.get(w);
            map.set(w, ++s);
        }
        else map.set(w, 1);
    }

    if (document.querySelector('ul')) document.querySelector('ul').remove();
    let ul = document.createElement('ul');
    document.body.append(ul);
    for (let e of map) {
        let li = document.createElement('li');
        li.innerHTML = `Слово "${e[0]}": ${e[1]}`;
        ul.append(li);
    }

}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('button').addEventListener('click', sendMessage);
})

