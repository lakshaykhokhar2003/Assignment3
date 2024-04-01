import React from "react";
import {tickets} from "@/utils/data";
import {getCurrentTime} from "@/utils/function";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";

interface Props {
    ticket: tickets[];
}

const Ticket: React.FC<Props> = ({ticket}) => {
    return (<div className="flex flex-row items-center">
        <button className="button-options border border-cyan-500 text-cyan-500 p-4 h-16"><MdOutlineKeyboardArrowLeft
            className="text-cyan-500 hover:text-white icon" fontSize="20px"/></button>
        <article className="m-20 mb-40 flex flex-row gap-10">
            {ticket.map((ticket, index) => (
                <div key={index} className="flex flex-col">
                    <header
                        className="border border-gray-150 border-b-0 shadow-gray-400 shadow-lg flex items-center justify-center ">
                        <img src={ticket.image} alt='Image' className="w-full ticketHeight mt-2"/>
                    </header>
                    <div className="ticket__divider">
                        <div className="ticket__notch"/>
                        <div className="ticket__notch ticket__notch--right"/>
                    </div>
                    <div
                        className="bg-white border border-gray-150 border-t-0 shadow-gray-400 shadow-lg flex flex-col p-3">
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-2xl font-semibold mt-4 mb-2">{ticket.title}</h2>
                            <p className="font-medium mb-2">{getCurrentTime()}</p>
                            <p className="text-gray-500 p-4 mb-2">{ticket.location}</p>
                        </div>
                        <button className="mt-4 bg-gray-900 text-white p-4 pl-10 pr-10">{ticket.collection}</button>
                    </div>
                </div>
            ))}
        </article>
        <button className="button-options border border-cyan-500 text-cyan-500 p-4 h-16"><MdOutlineKeyboardArrowRight
            className="text-cyan-500 hover:text-white icon" fontSize="20px"/></button>

    </div>)
}

export default Ticket;