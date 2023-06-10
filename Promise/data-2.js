let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true;
            if (flag) {
                resolve("Data Inserted Successfully")
            }
            else {
                reject("Failed")
            }

        }, 4000)

    });
}
let getEmployees = () => { }

createEmployee({ id: 103, name: "Sonia", sal: 65000 })
    .then((msg) => {
        console.log(msg)
    })
    .catch((err) => {
        console.log(err)
    })