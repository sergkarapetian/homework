// 14.  Return the name of the student who has the lowest evaluation score․
// Վարադարձնել այն ուսանողի անունը, ով արդյունքների մեջ ունի ամենացածր գնահատականը։

 const evaluations = [
    {
        studentId: 1,
        studentName: "John Doe",
        courseId: 1,
        courseName: "JS Bootcamp",
        score: 70
    },
    {
        studentId: 1,
        studentName: "John Doe",
        courseId: 2,
        courseName: "JS Level 0",
        score: 60
    },
    {
        studentId: 1,
        studentName: "John Doe",
        courseId: 3,
        courseName: "JS Level 1",
        score: 50
    },
    {
        studentId: 2,
        studentName: "Tom Colins",
        courseId: 1,
        courseName: "JS Bootcamp",
        score: 60
    },
    {
        studentId: 2,
        studentName: "Tom Colins",
        courseId: 2,
        courseName: "JS Level 0",
        score: 50
    },
    {
        studentId: 2,
        studentName: "Tom Colins",
        courseId: 3,
        courseName: "JS Level 1",
        score: 40
    },
    {
        studentId: 3,
        studentName: "Sarah Conor",
        courseId: 1,
        courseName: "JS Bootcamp",
        score: 45
    },
    {
        studentId: 3,
        studentName: "Sarah Conor",
        courseId: 2,
        courseName: "JS Level 0",
        score: 35
    },
    {
        studentId: 3,
        studentName: "Sarah Conor",
        courseId: 3,
        courseName: "JS Level 1",
        score: 25
    }
];
function lowestScoreStudent(arr) {
    let lowestScore = arr[0].score;
    let studentName = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].score < lowestScore) {
            lowestScore = arr[i].score;
            studentName = arr[i].studentName;
        }
    }
    return studentName;
};

console.log(lowestScoreStudent(evaluations));