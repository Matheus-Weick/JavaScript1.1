let titulo = document.querySelector("#tittle");
titulo.innerText = "Esse aqui é o título";
let desordenada = document.querySelector("ul");
desordenada.innerHTML = (`
    <li>Item Simples 1</li>
    <li>Item Simples 2</li>
    <li>Item Simples 3</li>`);
let img = document.querySelector("a");
img.innerHTML = (`https://prozeducacao.com.br`);
let ordenado = document.querySelector("#lista-ordenada");
ordenado.innerHTML = (`
    <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
    <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
    <li><a href="https://www.whatsapp.com/" target="_blank">Whatsapp</a></li>`);