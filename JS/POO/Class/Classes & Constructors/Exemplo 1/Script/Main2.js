function Studentregistration(){
    let name = document.querySelector("#sName").value;
    let course = document.querySelector("#sCourse").value;
    let grade1 = Number(document.querySelector("#sGrade1").value);
    let grade2 = Number(document.querySelector("#sGrade2").value);
    let grade3 = Number(document.querySelector("#sGrade3").value);

    const s = new Student(name, course, grade1, grade2, grade3);

    console.log(s.display());
    console.log(s.avg());

    clear()

}

function clear(){
    let name = document.querySelector("#sName")
    let course = document.querySelector("#sCourse")
    let grade1 = document.querySelector("#sGrade1")
    let grade2 = document.querySelector("#sGrade2")
    let grade3 = document.querySelector("#sGrade3")

    name.value = ""; 
    course.value = ""; 
    grade1.value = ""; 
    grade2.value = ""; 
    grade3.value = ""; 
}