'use client'
import React, {useState} from 'react';

function Thirdpage(props) {

    return (
        <div className="relative z-[5]">
            <div id="blob" className="z-[10] absolute right-[250px] top-[150px] rounded-[100%] h-[15rem] w-[15rem] bg-[#E7E6AD]">

            </div>
            <div className="w-screen absolute top-0 min-h-screen bg-[#003E29] z-[7] ">

            </div>
            <div className="w-screen h-screen absolute top-0 z-[6] bg-[#E7E6AD] text-[#003E29] text-[80px] flex items-center justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, voluptatum?
            </div>
        </div>

    );
}

export default Thirdpage;