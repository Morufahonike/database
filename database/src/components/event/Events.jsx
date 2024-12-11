import{ useCreateTicketMutation } from '../../feature/eventslice/eventApiSlice';
import{ useState } from 'react';


import '../event/Event.css'

import React from 'react'

const Event = () => {
  
    const [addTicket] = useCreateTicketMutation();
    const [ticketData, setTicketData] = useState({
      name: '',
      email: '',
      ticket_type: '',
      ticket_number: '',
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();

      
    // Validate form data
    if (
      ticketData.name.trim() &&
      ticketData.email.trim() &&
      ticketData.ticket_type.trim() &&
      ticketData.ticket_number.trim()
    )  
    { {
      await addTicket(ticketData)
    }}
    setTicketData({name: "", email: "", ticket_type: "", ticket_number: ""})
  }




  return (
    <div>
      
      <div className="form1">
        <form onSubmit={handleSubmit}>
          <div className="firststage">
            <div className="name">
              <input
                className="stage"
                type="text"
                placeholder="Enter your name"
                value={ticketData.name}
                onChange={(e) =>
                  setTicketData({ ...ticketData, name: e.target.value })
                }
              />
            </div>

            <div className="email">
              <input
                className="stage"
                type="email"
                placeholder="Enter your Email"
                value={ticketData.email}
                onChange={(e) =>
                  setTicketData({ ...ticketData, email: e.target.value })
                }
              />
            </div>

            <div className="ticket-type">
              <input
                className="stage"
                type="text"
                placeholder="Enter your Ticket Type"
                value={ticketData.ticket_type}
                onChange={(e) =>
                  setTicketData({ ...ticketData, ticket_type: e.target.value })
                }
              />
            </div>

            <div className="ticket-number">
              <input
                className="stage"
                type="text"
                placeholder="Enter your Ticket Number"
                value={ticketData.ticket_number}
                onChange={(e) =>
                  setTicketData({ ...ticketData, ticket_number: e.target.value })
                }
              />
            </div>

            <button type="submit">
              {isEditing ? 'Update Ticket' : 'Get Ticket'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Event
