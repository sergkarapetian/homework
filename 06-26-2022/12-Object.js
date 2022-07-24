// 12. * Calculate the total sum of payment amounts made by each student.
//  We need to return an array that contains a list of information about students,
//   including the total paid amount by the student.
// Հաշվել յուրաքանչյուր ուսանողի կողմից վճարված ամբողջ գումարը։    +++++
//  Անհրաժեշտ է վերադարձնել ուսանողների ցուցակը (array), 
//  որը ընդգրկում է ուսանողների տվյալները, նեռարյալ ուսանողի կողմից ամբողջ վճարված գումարը։





const payments = [
    {
        studentId: 1,
        studentName: "John Doe",
        payedAmount: 1600,
        year: 2020
    },
    {
        studentId: 1,
        studentName: "John Doe",
        payedAmount: 1500,
        year: 2021
    },
    {
        studentId: 1,
        studentName: "John Doe",
        payedAmount: 1400,
        year: 2022
    },
    {
        studentId: 1,
        studentName: "John Doe",
        payedAmount: 1300,
        year: 2023
    },
    {
        studentId: 2,
        studentName: "Lu Kang",
        payedAmount: 1500,
        year: 2020
    },
    {
        studentId: 2,
        studentName: "Lu Kang",
        payedAmount: 1400,
        year: 2021
    },
    {
        studentId: 2,
        studentName: "Lu Kang",
        payedAmount: 1300,
        year: 2023
    },
    {
        studentId: 2,
        studentName: "Lu Kang",
        payedAmount: 1200,
        year: 2023
    }
];
function amountOfStudentsHavePayed(arr) {
    const list = [];
    for (let student of arr) {
        const object = {};
        let copy = true;
        object.studentId = student.studentId;
        object.studentName = student.studentName;
        object.payedAmount = student.payedAmount;
        for (let studentCopy of list) {
            if (studentCopy.studentId === object.studentId) {
                studentCopy.payedAmount += object.payedAmount
                copy = false
                break;
            }
        }
        if (copy) {
            list.push(object);
        }
    }
    console.log(list);
};
amountOfStudentsHavePayed(payments);