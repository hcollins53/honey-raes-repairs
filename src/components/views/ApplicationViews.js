import { Outlet, Route, Routes } from "react-router-dom"
import { TicketSearch } from "../tickets/SearchTicket"
import { TicketContainer } from "../tickets/TicketContainer"
import { TicketForm } from "../tickets/TicketForm"
import { TicketList } from "../tickets/TicketList"
import { CustomerViews } from "./CostumerViews"
import { EmployeeViews } from "./EmployeeViews"


export const ApplicationViews = () => {
	const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

	if(honeyUserObject.staff) {
		return (
			<EmployeeViews/>
		)
	} else {
		return (
			<CustomerViews />
		)
	}
	
}
