var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){

    event.preventDefault();
    
    var tr = document.createElement('tr');

    campos.forEach(function(campo) {

        // cria uma td sem informações
        var td = document.createElement('td');

        //atribui o valor do campo a td
        td.textContent = campo.value;

        //adiciona a td na tr
        tr.appendChild(td);
    });

    //nova td que armazena o volume da negociação
    var tdVolume = document.createElement('td');

    //as posicoes 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente
    tdVolume.textContent = campos[1].value * campos[2].value;

    //adicionando a td que faltava a à tr
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);
    //limpa o campo data
    campos[0].value = '';
    //limpa o campo quantidade
    campos[1].value = 1;
    //limpa o campo valor
    campos[2].value = 0;
    //foco no campo data
    campos[0].focus();
});

