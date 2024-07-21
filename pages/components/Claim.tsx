import Image from "next/image";

export default function Claim () {
    return (
    <>
        <div className="flex flex-col items-center text-center relative text-[white]">
            <div className="text-[22px] font-[700]">
                CLAIM YOUR <span className="text-[#F7A039]">PALMSHIBA</span><br/>TOKEN
            </div>
            <div className="border-4 border-[#1B0C3D] bg-[#141746] rounded-[25px] text-[22px] px-10 py-3">
                See Your Claimable Tokens
            </div>
            <div className="text-[22px] text-[gray]">
                Tokens can be claimed at the end of the presale
            </div>
            <div className="relative">
                <Image alt="footprint" src="/footprint-1.png" width="400" height="400"></Image>
                <div className="absolute left-[60px] top-0 text-[30px] font-[700]">
                    STAKING<br/>
                    <span className="text-[55px] text-gradient">IS COMING<br/>SOON</span>
                </div>
            </div>
        </div>
    </>
    );
}