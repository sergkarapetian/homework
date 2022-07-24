// 9.  Calculate the sum of all payments 
//     Հաշվել վճարումների ամբողջ գումարը

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

function sumOfAllPayments(arr) {
    let sum = arr[0].payedAmount;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].payedAmount) {
            sum += arr[i].payedAmount;
        }
    }
    return sum;
};

console.log(sumOfAllPayments(payments));