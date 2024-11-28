import { Exam } from './exam.js';

const resposta = { q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd' }; 
const peso = { q1: 2, q2: 2, q3: 2, q4: 2, q5: 2 };
const prova = new Exam(resposta, peso);

const aluno1 = {
    estudante: 'Felipe',
    teste: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
};

const aluno2 = {
    estudante: 'José',
    teste: { q1: 'a', q2: 'b', q3: 'c', q4: 'c', q5: 'd' },
};

prova.add(aluno1);
prova.add(aluno2);

console.log(prova.exams);
console.log(`Média das notas: ${prova.avg()}`);
console.log(`Menor nota: ${prova.min()}`);
console.log(`Maior nota: ${prova.max()}`);
console.log(`Notas menores que 7: ${prova.lt(7)}`);
console.log(`Notas maiores que 7: ${prova.gt(7)}`);