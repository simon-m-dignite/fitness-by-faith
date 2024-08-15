import React, { useEffect, useState } from 'react'
import TicketsList from '../components/Tickets/TicketsList'
import Loader from '../components/Global/Loader'
import Axios from "../axios"

const Tickets = () => {
  const [loading, setLoading] = useState(true)
  const [mails , setMails] = useState("")

  const getTicketMails = async()=>{
    try {
      const { data } = await Axios.get("support/get/emails");
      setMails(data?.data)
      setLoading(false); 
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    getTicketMails()
  },[])
  return (
    <div className='min-h-screen'>
      <h1 className='text-xl font-semibold mb-6'>Support Requests</h1>
      {!loading ? <TicketsList mails={mails}/> : <Loader/> }
    </div>
  )
}

export default Tickets
