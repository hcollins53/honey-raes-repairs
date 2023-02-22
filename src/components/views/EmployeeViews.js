import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerDetails } from "../auth/customers/CustomerDetails"
import { CustomerList } from "../auth/customers/CustomerList"
import { Profile } from "../auth/profile/profile"
import { EmployeeDetails } from "../employees/employeeDetails"
import { EmployeeList } from "../employees/employeeList"
import { TicketContainer } from "../tickets/TicketContainer"



export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

                <Route path="tickets" element={ <TicketContainer />} />
                <Route path="employees" element={ <EmployeeList />} />
                <Route path="profile" element={ <Profile/> } />
                <Route path="customers" element={ <CustomerList />} />
                <Route path="employees/:employeeId" element={ <EmployeeDetails/>} />
                <Route path="customers/:customerId" element={ <CustomerDetails/>} />

            </Route>
        </Routes>
    )
}