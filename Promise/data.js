let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = false;
            if (flag) {
                resolve("Data Inserted Successfully")
            }
            else {
                reject("Failed")
            }
            employees.push(emp)
        }, 4000)

    });
}
let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        for (employee of employees) {
            rows = rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.sal}</td>

                          </tr>`
        }
        document.getElementById('abc').innerHTML = rows
    }, 1000)
}

createEmployee({ id: 103, name: "Sonia", sal: 65000 })
    .then((msg) => {
        getEmployees()
        console.log(msg)
    })
    .catch((err) => {
        console.log(err)
    })
//getEmployees()