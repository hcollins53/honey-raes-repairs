import { useEffect, useState } from "react"
import { getAllEmployees } from "../ApiManager"
import { Employee } from "./employee"
import "./employees.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
            getAllEmployees()
             .then((employeeArray) => {
                setEmployees(employeeArray)
             })
        },
        []
    )
    return (
        <article className="employees">
        {
            employees.map(employee => <Employee key={employee.id} id={employee.id} fullName={employee.fullName} email={employee.email}/>)
                

            }
</article>
    )
}