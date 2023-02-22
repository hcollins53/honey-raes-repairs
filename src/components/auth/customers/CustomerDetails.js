import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCustomerDetails } from "../../ApiManager"

export const CustomerDetails = () => {
    const {customerId} = useParams()
    const [customer, updateCustomer] = useState({})

    useEffect(
        () => {
            getCustomerDetails({customerId})
                .then((data) => {
                   const singleCustomer = data[0]
                   updateCustomer(singleCustomer)
                })
        },
        [customerId]
    )

    return (
        <section className="customer">
        <header className="customer_header">{customer?.user?.fullName}</header>
        <div> Email: {customer?.user?.email} </div>
        <div> Address: {customer?.address} </div>
        <div> Phone Number: {customer?.phoneNumber} </div>
    </section>
        )
}