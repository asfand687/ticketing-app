import TicketForm from '@/app/(components)/TicketForm'
import React from 'react'

const getTicketById = async(id: string) => {

  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {

    cache: "no-store"
  })
  if(!res.ok) {

    throw new Error("Failed to get ticket.")
  }
  
  return res.json()
}

const Ticket = async ({ params }: { params: { id: string }}) => {

  const EDIT_MODE = params.id === "new" ? false : true
  let updateTicketData: Record<string, any> = {}

  if(EDIT_MODE) {

    updateTicketData = await getTicketById(params.id)
    updateTicketData.ticket

  } else {

    updateTicketData = {
      _id: "new"
    }
  }

  return (
    <div>
      <TicketForm
        ticket={updateTicketData.ticket}
      />
    </div>
  )
}

export default Ticket