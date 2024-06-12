import TicketForm from '@/app/(components)/TicketForm'
import React from 'react'

const Ticket = ({ params }: { params: { id: number }}) => {
  return (
    <div>
      <TicketForm/>
    </div>
  )
}

export default Ticket