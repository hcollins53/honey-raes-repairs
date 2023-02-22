import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editServiceTicket, getServiceTicket } from "../ApiManager"

export const TicketEdit = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false
    })
    const { ticketId } = useParams()
    const navigate = useNavigate()
  

    useEffect(() => {
       getServiceTicket({ticketId})
                .then((data) => {
                   const singleTicket = data
                   updateTicket(singleTicket)
                })

    }, [ticketId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        
       
      

        // TODO: Perform the fetch() to POST the object to the API
        editServiceTicket({ticket})
            .then(() => {
               navigate("/tickets")
            }) 
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">Update Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        value={ticket.description}
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description = evt.target.value
                                updateTicket(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        checked={ticket.emergency}
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.emergency = evt.target.checked
                                updateTicket(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
             onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
             className="btn btn-primary">
                Save Edit
            </button>
        </form>
    )
}