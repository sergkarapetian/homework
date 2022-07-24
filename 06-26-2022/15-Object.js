// 15.  Return array of students that have any evaluation more than 60․
// Վերադարձնել այն ուսանողների ցուցակը, որոնք ունեն որևէ արդյունք որը մեծ է 60-ից։
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

function studentsNameList(arr) {
    let checkId = [];
    let result = [];
    root: for (let student of arr) {
        for (let j = 0; j < checkId.length; j++) {
            if (student.studentId === checkId[j]) {
                continue root;
            }
        }

        if (student.score > 60) {
            result.push(student.studentName);
            checkId.push(student.studentId);
        }
    }
    return result;
};
console.log(studentsNameList(evaluations));


