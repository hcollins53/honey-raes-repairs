import { Link } from "react-router-dom"
import { changeTicketToClose, claimButton, deleteTicket } from "../ApiManager"

export const Ticket = ({ ticketObject, currentUser, employees, getAllTickets }) => {
   
    let assignedEmployee = null

    if(ticketObject.employeeTickets.length > 0) {
        const ticketEmployee = ticketObject.employeeTickets[0]
        assignedEmployee = employees.find(employee => employee.id === ticketEmployee.employeeId)
    }

    const userEmployee = employees.find(employee => employee.userId === currentUser.id)

    const CanClose = () => {
        if(assignedEmployee?.id === userEmployee?.id && ticketObject.dateCompleted === "") {
            return <button onClick={CloseTicket} className="ticket_finish">Finish</button>
        } else {
            return ""
        }
    }
    const deleteButton = () => {
        if(!currentUser.staff) {
            return <button onClick={() => {
                deleteTicket({ticketObject}).then(() => {
                        getAllTickets()
                    })  
            }} className="ticket_delete">Delete</button>
        } else {
            return ""
        }
    }

    const CloseTicket = () => {
        const copy = {
            userId: ticketObject.userId,
            description: ticketObject.description,
            emergency: ticketObject.emergency,
            dateCompleted: new Date()
        }
        changeTicketToClose({ticketObject, copy})
                .then(() => 
                {
                    getAllTickets()
                })
                }
    
    const buttonOrNoButton = () => {
        if(currentUser.staff) {
            return <button
            onClick={() => {
               claimButton({userEmployee, ticketObject})
                    .then(() => {
                        getAllTickets()
                    })  
            }}
            >Claim</button>
        } else {
            return ""
        }
    }
    return <section className="ticket">
                        <header>
                            {
                                currentUser.isStaff
                                ? `Ticket ${ticketObject.id}`
                                : <Link to={`/tickets/${ticketObject.id}/edit`}>Ticket {ticketObject.id}</Link>
                            }
                        </header>
                        <section className="ticket_section">{ticketObject.description}</section>
                        <section className="ticket_section2">Emergency: {ticketObject.emergency ? "🧨" : "No"}</section>
                        <footer className="ticket_footer">
                            {
                                ticketObject.employeeTickets.length
                                ? `Assigned to ${assignedEmployee !== null ? assignedEmployee?.user?.fullName : "" }`
                                : buttonOrNoButton()
                                
                            }
                            {
                                CanClose()
                            }
                            {
                                deleteButton()
                            }
                        </footer>
                </section>
}