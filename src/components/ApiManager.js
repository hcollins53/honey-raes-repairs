export const getAllCustomers = () => {
    return fetch(`http://localhost:8088/users?isStaff=false`).then(
             response => response.json())
}

export const getCustomerDetails = ({customerId}) => {
   return fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`).then(
        response => response.json())
}

export const getCustomerProfile = ({honeyUserObject}) => {
    return fetch(`http://localhost:8088/customers?userId=${honeyUserObject.id}`).then(
                response => response.json())
}

export const changeCustomerProfile = ({profile}) => {
   return fetch(`http://localhost:8088/customers/${profile.id}`, {
        method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
   body: JSON.stringify(profile) 
    }).then(
        response => response.json())
}

export const getEmployeeProfile = ({honeyUserObject}) => {
    return fetch(`http://localhost:8088/employees?userId=${honeyUserObject.id}`).then(
                response => response.json())
}
export const changeEmployeeProfile = ({profile}) => {
   return fetch(`http://localhost:8088/employees/${profile.id}`, {
        method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
   body: JSON.stringify(profile) 
    })
}

export const getLogin = ({email}) => {
    return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
}
export const getRegister = ({user}) => {
    return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
}
export const findEmail = ({user}) => {
    return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
}

export const getEmployeeDetails  = ({employeeId}) => {
    return fetch(`http://localhost:8088/employees?_expand=user&_embed=employeeTickets&userId=${employeeId}`).then(
                response => response.json())
}
export const getAllEmployees = () => {
    return fetch(`http://localhost:8088/users?isStaff=true`).then(
             response => response.json())
}
export const deleteTicket = ({ticketObject}) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketObject.id}`, {
                    method: "DELETE",
                })
}
export const changeTicketToClose = ({copy, ticketObject}) => {
   return fetch(`http://localhost:8088/serviceTickets/${ticketObject.id}`, {
                    method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
               body: JSON.stringify(copy) 
                }).then(
                    response => response.json())
}
export const claimButton = ({userEmployee, ticketObject}) => {
    return fetch(`http://localhost:8088/employeeTickets`, {
        method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
   body: JSON.stringify({
    employeeId: userEmployee.id,
    serviceTicketId: ticketObject.id
   }) 
    }).then(
        response => response.json())
}

export const getServiceTicket = ({ticketId}) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`).then(
        response => response.json())
}

export const editServiceTicket = ({ticket}) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
           body: JSON.stringify(ticket) 
        }).then(
            response => response.json())
}
export const makeServiceTicket = ({ticketToSendToAPI}) => {
    return fetch(`http://localhost:8088/serviceTickets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
           body: JSON.stringify(ticketToSendToAPI) 
        }).then(
            response => response.json())
}
export const getTickets = () => {
   return fetch(`http://localhost:8088/serviceTickets?_embed=employeeTickets`).then(
     response => response.json())
     }
export const getEmployeesWithUsers = () => {
   return fetch(`http://localhost:8088/employees?_expand=user`).then(
             response => response.json())
}