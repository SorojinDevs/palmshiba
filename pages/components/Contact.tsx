import Image from "next/image";

export default function Contact () {
    return (
    <>
        <div className="flex flex-col">
            <div className="text-center text-[40px] font-[700] text-[white]">Get in Touch</div>
            <div className="flex flex-row justify-between">
                <div>
                    <Image className="-rotate-45" alt="footprint" src="/footprint-1.png" width="200" height="200"></Image>
                </div>
                <div className="flex flex-row justify-between items-center gap-5">
                    <div className="flex items-center justify-center back-gradient rounded-[50%] w-20 h-20">
                        <Image alt="mark" src="/mark-f.png" width="20" height="20"></Image>
                    </div>
                    <div className="flex items-center justify-center back-gradient rounded-[50%] w-20 h-20">
                        <Image alt="mark" src="/mark-in.png" width="30" height="30"></Image>
                    </div>
                    <div className="flex items-center justify-center back-gradient rounded-[50%] w-20 h-20">
                        <Image alt="mark" src="/mark-x.png" width="30" height="30"></Image>
                    </div>
                    <div className="flex items-center justify-center back-gradient rounded-[50%] w-20 h-20">
                        <Image alt="mark" src="/mark-m.png" width="30" height="30"></Image>
                    </div>
                </div>
                <div>
                    <Image className="" alt="shiba" src="/shiba-1.png" width="200" height="200"></Image>
                </div>
            </div>
        </div>
    </>
    );
}