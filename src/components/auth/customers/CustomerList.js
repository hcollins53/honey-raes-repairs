import { useEffect, useState } from "react"
import { getAllCustomers } from "../../ApiManager"
import { Customer } from "./Customer"
import "./Customers.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            getAllCustomers()
             .then((customerArray) => {
                setCustomers(customerArray)
             })
        },
        []
    )
    return (
        <article className="customers">
        {
            customers.map(customer => <Customer key={customer.id} id={customer.id} fullName={customer.fullName} email={customer.email}/>)
                

            }
</article>
    )
}