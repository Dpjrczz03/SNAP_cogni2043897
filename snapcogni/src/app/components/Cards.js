import React from 'react';

function Cards(props) {
    return (
        <div className="h-[85vh] w-[80vw] rounded-[60px] bg-[#0B4350] border-[5px] border-[#F58BCF] flex flex-col px-[45px] py-[25px] gap-[2rem]">
            <div className="h-[40%] flex items-center">
                <div className="text-[240px] font-extrabold text-white">
                    1
                </div>
            </div>
            <div className="flex items-start justify-evenly gap-[7rem] text-white px-[30px]">
                <div className="flex flex-col items-start justify-center gap-[1rem]">
                    <div className="font-extrabold text-[35px] tracking-widest">Myths</div>
                    <div className="w-auto  text-[#F58BCF] font-extrabold text-[26px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa, dolore nisi nostrum repellat suscipit ut. Harum maxime reprehenderit temporibus.</div>
                </div>
                <div className=" flex flex-col items-start justify-center gap-[1rem]">
                    <div className="font-extrabold text-[35px] tracking-widest">Facts</div>
                    <div className="w-auto text-[#F58BCF] text-[26px] font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto dolor esse excepturi impedit nemo rem reprehenderit rerum, veritatis vero.</div>
                </div>
            </div>
        </div>
    );
}

export default Cards;