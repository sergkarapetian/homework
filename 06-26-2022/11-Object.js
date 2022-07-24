// 11.  Calculate the average of all payments
// Հաշվել բոլոր կատարված վճարուների թվաբանական միջինը

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

function averageOfAllPayments(arr) {
    let count = 0;
    let sum = 0;
    let result;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].payedAmount;
        count += 1;
    }
console.log(result = sum/count);
};

averageOfAllPayments(payments);
