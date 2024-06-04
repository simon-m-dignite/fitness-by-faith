import React from 'react'
import TicketsList from '../components/Tickets/TicketsList'

const Tickets = () => {
  return (
    <div className='min-h-screen'>
      <h1 className='text-xl font-medium mb-6'>Support Requests</h1>
      <TicketsList/>
    </div>
  )
}

export default Tickets
