import Image from "next/image";

export default function Roadmap () {
    return (
    <>
        <div className="flex flex-col text-center text-[white]">
            <div className="text-[25px] font-[700] py-3">
                <span className="text-[#F7A039]">PALMSHIBA</span> ROADMAP
            </div>
            <div className="text-[20px] font-[600] py-2">
                <span className="text-[#F04C25]">PHASE 1:</span>PRESALE AND TOKEN DISTRIBUTION
            </div>
            <div>
            <div className="px-10 my-2">
                <div className="flex flex-col md:flex-row justify-between bg-[#141746] rounded-[10px] w-full px-5 py-5">
                    <div className="flex flex-start w-[250px]">
                        <div className="w-[20px]">
                            <Image alt="circle" src="/circle-2.png" width="20" height="20"></Image>
                        </div>
                        <div>Industry research and consultation</div>
                    </div>
                    <div className="flex flex-start w-[250px]">
                        <div className="w-[20px]">
                            <Image alt="circle" src="/circle-2.png" width="20" height="20"></Image>
                        </div>
                        <div>Token, presale and staking contract development</div>
                    </div>
                    <div className="flex flex-start w-[250px]">
                        <div className="w-[20px]">
                            <Image alt="circle" src="/circle-2.png" width="20" height="20"></Image>
                        </div>
                        <div>PSHIBA campaign - presale launch, claim and exchange listings</div>
                    </div>
                    <div className="flex flex-start w-[250px]">
                        <div className="w-[20px]">
                            <Image alt="circle" src="/circle-2.png" width="20" height="20"></Image>
                        </div>
                        <div>Extensive multimedia marketing campaign launch</div>
                    </div>
                </div></div>
            </div>
        </div>
    </>
    );
}