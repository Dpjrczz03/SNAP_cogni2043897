import React from 'react';
import carddata from "@/app/components/carddata";
import Cards from "@/app/components/Cards";

function Cardpage(props) {
    return (
        <div
                className="min-h-screen w-screen bg-[#0B4350] flex flex-col gap-[3rem] items-start justify-center px-[12rem] font-extrabold relative">
                <div className="text-[96px] text-[#F58BCF] leading-tight flex flex-col mt-[25%]">
                    <div>Let's Bust Some</div>
                    <div>Myths Surrounding</div>
                </div>
                <div className="text-[68px] text-white tracking-wider">
                    Suicide...
                </div>
                <div className="relative top-0 ">



                    {carddata.map((item)=>(<div className="relative">

                        <Cards id={item.id} myth={item.myth} fact={item.fact}/>
                   </div> ))}

                </div>
            </div>
    );
}

export default Cardpage;