import Image from "next/image";
import Landing from "@/app/components/Landing";
import Cards from "@/app/components/Cards";
import Cardpage from "@/app/components/Cardpage";
import Thirdpage from "@/app/components/Thirdpage";
import carddata from "@/app/components/carddata";

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <Landing/>
            <Cardpage/>
            <Thirdpage/>
        </div>

    );
}
