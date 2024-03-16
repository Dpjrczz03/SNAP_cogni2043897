import React from 'react';

function Landing(props) {
    return (
        <div className="min-h-screen w-screen flex items-center justify-center relative">
            <div className="font-extrabold text-[80px] flex flex-col items min-w-[60%] relative">
                <div className="absolute tracking-widest left-[36%] text-[20px] top-[-10%] font-light">10th September, 2023 is</div>
                <div className="w-full">World Suicide</div>
                <div className="w-full text-right">Prevention</div>
            </div>
            <div className="absolute left-[20px] w-[10rem] top-[10px] tracking-widest">
                How many do we lose every hour?
            </div>
            <div className="absolute right-[20px] w-[10rem] top-[10px] tracking-widest">
                How many do we lose every week?
            </div>
            <div className="absolute right-[20px] w-[10rem] bottom-[10px] tracking-widest">
                How many do we lose every year?
            </div>
            <div className="absolute left-[20px] w-[11rem] bottom-[10px] tracking-widest">
               How many do we lose every month?
            </div>
        </div>
    );
}

export default Landing;