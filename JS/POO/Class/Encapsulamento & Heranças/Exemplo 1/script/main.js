const p = new Pessoa();

/*
    Criando uma instancia
    a partir do encapsulamento
            (set)
*/

console.log("PESSOA")

p.name = "Pedro";
p.cpf = "123.456.789-00";
p.tel = "(00) 55555-4444";

console.log(p.name); // Isso seria  exibido a partir da função "get name".

console.log(p.displayName()); // Isso seria exibido a partir da função definida.

console.log("ALUNO")

const a = new Aluno();
a.name = prompt("Insira o nome: ");
a.cpf = "098.765.432.11"
a.tel = "(00) 12345-6789"
a.course = "Técnico em Desenvolvimento de Sistema";
a.class = "DS - DIV 2";
a.grade1 = 4;
a.grade2 = 4;

console.log(a.name);
console.log(a.displayGrades());
console.log(a.displayAverage());

console.log("PROFESSOR")

const pr = new Professor();
pr.name = prompt("Insira o nome: ");
pr.cpf = parseInt(prompt("Insira seu CPF: "));
pr.tel = parseInt(prompt("Insira o seu número de celular: "));
pr.field = prompt("Insira a area de sua especilização (i.e Química): ");
pr.degree = prompt("Insira sua nível de especialização. Onde que E = Especialista | M = Mestre | D = Doutorado").toUpperCase();

console.log(pr.displayInfo());
console.log(pr.displayDegree());