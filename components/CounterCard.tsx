import React from "react";

interface CounterCardProps {
    number: number;
    title: string;
}

function CounterCard(props: CounterCardProps) {
    return(
        <div className="bg-black rounded-lg shadow-lg p-7 flex-1 mx-7 mt-2 mb-2">
            <h2 className="text-5xl font-bold text-center" style={{ color: "#41ffca" }}>{props.number}</h2>
            <p className="mt-5 text-slate-200 text-xl font-semibold text-center">{props.title}</p>
        </div>
    );
};

export default CounterCard;