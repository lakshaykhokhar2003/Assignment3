import {advertisement, sports} from "@/utils/data";
import Card from "@/utils/CardComponent/Card";
import React from "react";

const Sports = () => {
    return (
        <div className="m-10">
            <h1 className="text-4xl font-extrabold pb-2 mb-5 text-center border-b-2 border-indigo-400 inline">Sports</h1>
            <div className="flex flex-col items-center">
                <div className="flex flex-row gap-10 max-xl:flex-col">
                    <Card data={sports}/>
                    <Card data={advertisement}/>
                </div>
                <button className="button text-white p-4 pl-10 pr-10 mt-20">See More</button>
            </div>
        </div>)
}

export default Sports;