let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]

let creteEmployee = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp)
        //callback()
    }, 4000)
}
let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        employees.forEach((emp) => {
            rows = rows + `<tr>
                           <td>${emp.id}</td>
                           <td>${emp.name}</td>
                           <td>${emp.sal}</td>
                           </tr>`
        })
        document.getElementById('abc').innerHTML = rows
    }, 1000)
}

creteEmployee({ id: 103, name: "Priyanak", sal: 65000 })
getEmployees()
