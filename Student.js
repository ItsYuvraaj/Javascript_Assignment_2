// Write a function using switch case to ﬁnd the grade of a student based on marks obtained
// a.	“S grade” if the marks are between 90 and 100.
// b.	“A grade” if the marks are between 80 and 90.
// c.	“B grade” if the marks are between 70 and 80.
// d.	“C grade” if the marks are between 60 and 70.
// e.	“D grade” if the marks are between 50 and 60.
// f.	“E grade” if the marks are between 40 and 50.
// g.	“Student has failed”  if the marks are between 0 and 40.
// h.	Else output “Invalid marks”.

function grade(score) {
    switch (true) {
        case (score >= 90 && score <= 100):
            console.log("S grade");
            break;
        case (score >= 80 && score <= 90):
            console.log("A grade");
            break;
        case (score >= 70 && score <= 80):
            console.log("B grade");
            break;
        case (score >= 60 && score <= 70):
            console.log("C grade");
            break;
        case (score >= 50 && score <= 60):
            console.log("D grade");
            break;
        case (score >= 40 && score <= 50):
            console.log("E grade");
            break;
        case (score >= 0 && score <= 40):
            console.log("Student has failed");
            break;
        default:
            console.log("Invalid marks");
            break;
    }
}

grade(0);
