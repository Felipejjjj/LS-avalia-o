class Exam {
    constructor(resposta, peso) {
        this.resposta = resposta;
        this.peso = peso;
        this.exams = [];
    }

    // Função para calcular a nota de um aluno baseado nas respostas e pesos
    calcularNota(respostasAluno) {
        return Object.keys(this.resposta).reduce((nota, questao) => {
            if (this.resposta[questao] === respostasAluno[questao]) {
                return nota + this.peso[questao];
            }
            return nota;
        }, 0);
    }

    // Método para adicionar um aluno à lista de exames
    add(aluno) {
        const notaAluno = this.calcularNota(aluno.values);
        const alunoComNota = { ...aluno, nota: notaAluno };
        this.exams.push(alunoComNota);
    }

    // Método para calcular a média das notas dos alunos
    avg() {
        if (this.exams.length === 0) return 0;
        const totalNotas = this.exams.reduce((total, exam) => total + exam.nota, 0);
        return totalNotas / this.exams.length;
    }

    // Método para encontrar a menor nota
    min() {
        if (this.exams.length === 0) return 0;
        return this.exams.reduce((menor, exam) => exam.nota < menor ? exam.nota : menor, this.exams[0].nota);
    }

    // Método para encontrar a maior nota
    max() {
        if (this.exams.length === 0) return 0;
        return this.exams.reduce((maior, exam) => exam.nota > maior ? exam.nota : maior, this.exams[0].nota);
    }

    // Método para contar quantos alunos têm nota menor que um valor específico
    lt(num) {
        return this.exams.filter(exam => exam.nota < num).length;
    }

    // Método para contar quantos alunos têm nota maior que um valor específico
    gt(num) {
        return this.exams.filter(exam => exam.nota > num).length;
    }
}

export { Exam };