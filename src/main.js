import data from './data/rickandmorty/rickandmorty.js';

console.log(data);

const dados = data.results;

console.log(dados);

var x = 0;

$(window).load(function() {
    updateCard();
});

function cards() {
    for (x in dados) {
        const id = dados[x].id;
        const nome = dados[x].name;
        const image = dados[x].image;
        const genero = dados[x].gender;
        const episode = dados[x].episode.length;
        const location = dados[x].location.name;
        const origem = dados[x].origin.name;
        const especie = dados[x].species;
        const status = dados[x].status;

        $('<div class="card">' +
            '<div class="front">' +
            '<img src="' + image + '" style-"borderRadius:50px;">' +
            '<div id = "texto" >' + nome + '</div>' +
            '</div>' +
            '<div class = "back" >' +
            '<div id = "texto2">' + genero + '</div>' +
            '<div id = "texto3"> ' + episode + ' </div>' +
            '<div id="texto4">' + location + '</div>' +
            '</div> ' +
            '</div>').appendTo($('.card-container'));
        /*
        if (id == 1) {
            const nome = dados[x].name;
            const genero = dados[x].gender;
            console.log(nome);
            console.log(genero);
            document.getElementById("texto").innerHTML = nome;
        }
        */
    }
}

function updateCard() {
    while (x <= 3) {
        cards();
        x += 1;
    }
}
/*function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '41px';
    }
}*/