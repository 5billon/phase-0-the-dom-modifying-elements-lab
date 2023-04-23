let main = document.querySelector('main#main');
main.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = `Kevin is the champion`;

document.body.appendChild(newHeader);
