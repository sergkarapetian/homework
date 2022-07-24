// 16. * Return array of students for whom the average evaluation is less than 40,
// Վերադարձնել այն ուսանողների ցուցակը որոնց միջին գնահատականը 40 ից ցածր է։

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

function studentsScoreAverage(arr) {
    let result = {};
    let coursesCount = 0;
    let keyCount = 0
    for (let student of arr) {
        if (result[student.studentName]) {
            result[student.studentName] = result[student.studentName] + student.score;
            coursesCount++;
        }
        else result[student.studentName] = student.score;
    }
    for (let keyWordsCount in result) {
        keyCount++;
    }
    for (let results in result) {
        result[results] = result[results] / ((coursesCount + keyCount) / (keyCount));
        if (result[results] > 40) {
            delete result[results];
        }
    }
    return result;
};
console.log(studentsScoreAverage(evaluations));
