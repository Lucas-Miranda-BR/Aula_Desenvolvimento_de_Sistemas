
/*
    "extends" seria como uma extensão a
    uma Class diferente podendo
    juntar serta caracterisiticas e
    podendo ter suas caracterisitcas unicas
*/

class Aluno extends Pessoa {
    set course(aCourse) {
        this._course = aCourse;
    }
    get course() {
        return this._course
    }

    set class(aClass) {
        this._class = aClass;
    }
    get class() {
        return this._class
    }

    set grade1(aGrade1) {
        this._grade1 = aGrade1;
    }
    get grade1() {
        return this._grade1;
    }

    set grade2(aGrade2) {
        this._grade2 = aGrade2;
    }
    get grade2() {
        return this._grade2;
    }

    displayGrades() {
        return `Nota 1º: ${this._grade1} - Nota 2º: ${this._grade2}`;
    }

    displayAverage() {
        return (this._grade1 + this._grade2) / 2;
    }
}
