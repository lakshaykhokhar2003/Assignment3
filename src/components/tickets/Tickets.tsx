import React from "react";
import Ticket from "@/utils/TicketComponent/Ticket";
import {ticketsData} from "@/utils/data";

const Tickets = () => {
    return (
        <div className="mt-40 flex flex-col items-center justify-center">
            <h1 className="text-7xl font-extrabold pb-2 mb-5 text-center inline">Collection
                Spotlight</h1>
            <p className="text-center font-semibold m-2 w-4/6">Discover extraordinary moments with our Spotlight
                Collection
                metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
            <Ticket ticket={ticketsData}/>
        </div>
    );

}

export default Tickets;
