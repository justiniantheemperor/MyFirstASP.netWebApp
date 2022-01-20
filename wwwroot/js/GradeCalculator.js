$("#btnCalc").click(function () {
    let assignments = $("#Assignments").val();
    let projects = $("#Project").val();
    let quizzes = $("#Quizzes").val();
    let exams = $("#Exams").val();
    let intex = $("#Intex").val();

    let iFinalGrade = (assignments * .55) + (projects * .05) + (quizzes * .10) + (exams * .20) + (intex * .10);

    let sLetterGrade = "";

    if (iFinalGrade >= 94) {
        sLetterGrade = "A";
    } else if (iFinalGrade >= 90) {
        sLetterGrade = "A-";
    } else if (iFinalGrade >= 87) {
        sLetterGrade = "B+";
    } else if (iFinalGrade >= 84) {
        sLetterGrade = "B";
    } else if (iFinalGrade >= 80) {
        sLetterGrade = "B-";
    } else if (iFinalGrade >= 77) {
        sLetterGrade = "C+";
    } else if (iFinalGrade >= 74) {
        sLetterGrade = "C";
    } else if (iFinalGrade >= 70) {
        sLetterGrade = "C-";
    } else if (iFinalGrade >= 67) {
        sLetterGrade = "D+";
    } else if (iFinalGrade >= 64) {
        sLetterGrade = "D";
    } else if (iFinalGrade >= 60) {
        sLetterGrade = "D-";
    } else {
        sLetterGrade = "E";
    }

    $("#finalgrade").html("You got a " + iFinalGrade + "% or an " + sLetterGrade)
})


