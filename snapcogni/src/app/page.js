import Image from "next/image";
import Landing from "@/app/components/Landing";
import Cards from "@/app/components/Cards";

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <Landing/>
            <div
                className="min-h-screen w-screen bg-[#0B4350] flex flex-col gap-[3rem] items-start justify-center px-[12rem] font-extrabold relative">
                <div className="text-[96px] text-[#F58BCF] leading-tight flex flex-col">
                    <div>Let's Bust Some</div>
                    <div>Myths Surrounding</div>
                </div>
                <div className="text-[68px] text-white tracking-wider">
                    Suicide...
                </div>
                <div className="absolute left-[10%]">
                    {/*<Cards/>*/}
                </div>
            </div>
        </div>
    );
}
