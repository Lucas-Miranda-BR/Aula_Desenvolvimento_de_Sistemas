class Student {
    constructor(sName, sCourse, sGrade1, sGrade2, sGrade3){
        this.name = sName;
        this.course = sCourse;
        this.grade1 = sGrade1;
        this.grade2 = sGrade2;
        this.grade3 = sGrade3;
    }

    display(){
        return `Nome: ${this.name} - Curso: ${this.course} - Notas: ${this.grade1} - ${this.grade2} - ${this.grade3}`;
    }
    
    avg(sGrade1, sGrade2, sGrade3) {
        let sum = sGrade1 + sGrade2 + sGrade3;
        return sum / 3;
    }
}
