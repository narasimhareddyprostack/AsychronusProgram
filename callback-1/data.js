let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]

let createEmployee = (emp) => {
    console.log("Test Case 123")
    setTimeout(() => {
        employees.push(emp)
    }, 4000)
}
function getEmployees() {
    setTimeout(() => {
        let rows = ""
        for (emp of employees) {
            rows = rows + `<tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.sal}</td>
                       </tr>`
        }
        document.getElementById('abc').innerHTML = rows
    }, 1000)
    //iterate array and create tr

}
createEmployee({ id: 103, name: "Priyanka", sal: 65000 })

getEmployees()