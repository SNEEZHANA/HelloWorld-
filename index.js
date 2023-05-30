const button = document.getElementById('button');
const logo = document.getElementById('logo');


button.onclick = function() {
    button.textContent = ':)';
}

console.log(logo.src);

logo.onclick = function() {
    logo.src = "https://upload.wikimedia.org/wikipedia/commons/1/12/SkyengNew.png" ;
}