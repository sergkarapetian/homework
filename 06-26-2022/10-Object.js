// 10.  Find the count of all payments that are more than 1500
//     Գտնել բոլոր այն վճարումների քանակը, որոնք ավելին են 1500-ից

const payments = [
    {
        studentId: 1,
        studentName: "John Doe",
        payedAmount: 1600,
        year: 2020,
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

function countOfPayments(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].payedAmount > 1500) {
            count += 1;
        }
    }
    console.log(count);
};

countOfPayments(payments);
