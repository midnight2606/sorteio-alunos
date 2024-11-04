
//criar uma função para exibir uma lista de alunos
// function listaAlunos(aluno1, aluno2,aluno3, aluno4){
//     console.log("Sejam bem vindos todos os alunos");
//     console.log(aluno1);
//     console.log(aluno2);
//     console.log(aluno3);
//     console.log(aluno4);
// }

//Vamos reescrever a função utilizando rest operator

function listaAlunos(...alunos){
    console.log("Sejam bem vindos todos os alunos");
    console.log(alunos);
    console.log(alunos[0]);
    console.log(alunos[3]);
}
listaAlunos('Adamastor', 'Benevides', 'Conegundes', 'Demerval');

//outro exemplo: sorteador de numeros primos menores do que 20

function sorteadorPrimo(...numeros){
    console.log(numeros);
    // const numeroSorteado = Math.random()*numeros.length;
    const numeroSorteado = Math.floor(Math.random()*numeros.length);
    console.log(`posição ${numeroSorteado}`);
    console.log(`Número primo: ${numeros[numeroSorteado]}`)
}

sorteadorPrimo(2, 3, 5, 7, 11, 13, 17, 19);






//sorteador de alunos 

function sorteioAlunos(...alunosSala){
    console.log(alunosSala);
    // const numeroSorteado = Math.random()*numeros.length;
    const alunoSorteado = Math.floor(Math.random()*alunosSala.length);
    console.log(`Sorteio ${alunoSorteado}`);
    console.log(`Aluno sorteado: ${alunosSala[alunoSorteado]}`)
}

sorteioAlunos('Aline', 'Ana Clara', 'André', 'Bernardo', 'Daniel', 'Deivid', 'Enrique', 'Fernanda', 'Gabriel Rossa', 'Gabriel Zattera', 'Heloise', 'Izadora', 'Jefte', 'João Matheus', 'João Maurício', 'José', 'Julia', 'Kamila', 'Karina', 'Kevin', 'Leo Freitas', 'Leo Speçamilio', 'Lorenzo', 'Lucas', 'Matheus', 'Nicolas', 'Nycolas', 'Pedro Portela', 'Rafaela', 'Raphael', 'Rayra', 'Valentina', 'Vinicius', 'Vitor Garrett', 'Vitor Schuski', 'Pedro da Silva', 'Ana Luiza');
