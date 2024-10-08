let company = {
    sales: [
        { name: "Hanna", salary: 2000 },
        { name: "Alice", salary: 600 },
    ],
    development: {
        web: [
            { name: "Peter", salary: 2000 },
            { name: "Alex", salary: 1800 },
        ],
        internals: [
            { name: "Jack", salary: 1300 },
        ],
    },
};

function calculateTotalSalary(departament) {
    let totalSalary = 0;

    if (Array.isArray(departament)) {
        departament.forEach(employee => {
            totalSalary += employee.salary;
        });
    }

    else {
        for (let subDepartament in departament) {
            totalSalary += calculateTotalSalary(departament[subDepartament]);
        }
    }

    return totalSalary;
}

let total = calculateTotalSalary(company);

console.log("Total salary:", total);

