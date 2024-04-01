import {ads, sports} from "@/utils/data";
import React from "react";

interface Props {
    data: Partial<sports>[];
}

const Card: React.FC<Props> = ({data}) => {
    return (
        <>
            {data.map((sport, index) => (
                <div key={index}
                     className="mt-10 bg-white p-3 border border-gray-150 shadow-lg flex flex-col items-start cardWidth">
                    {(sport as sports).events ?
                        <img src={sport.image} alt={sport.title} className="w-full cardHeight"/>
                        : <div className="relative">
                            <img src={sport.image} alt={sport.title} className="w-full cardHeight"/>
                            <div className="bg-black p-2 pl-4 pr-4 text-white absolute top-0 right-0">
                                Ad
                            </div>
                        </div>
                    }
                    <h2 className="text-xl font-semibold mt-4 mb-2">{sport.title}</h2>
                    {(sport as sports).events && (sport as sports).sport ? (
                        <div className="bg-gray-100 flex justify-around w-full">
                            <div className="flex flex-col">
                                <h1 className="text-gray-500 mt-2 mb-2">Total Events</h1>
                                <p className="font-semibold">{(sport as sports).events} events</p>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-gray-500 mt-2 mb-2">Sport</h1>
                                <p className="font-semibold mb-2">{(sport as sports).sport}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-500 mb-2">{(sport as ads).description}</p>
                    )}
                </div>
            ))}
        </>
    )
}

export default Card;