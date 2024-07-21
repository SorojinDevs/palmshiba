import Image from "next/image";

export default function Presale () {
    return (
    <>
        <div className="flex flex-col md:flex-row justify-end">
            <div className="flex flex-col bgx-[#141746] border-4 border-[#1B0C3D] rounded-[5px] items-center text-[white] pt-3 px-5 mt-10 mb-8 mx-3">
                <div className="font-['Holtwood One SC'] font-[800] text-[30px]">
                    BUY <span className="text-gradient">PALMSHIBA</span>
                </div>
                <div className="text-[20px] my-3">TIME REMAINING</div>
                <div className="flex flex-row items-center text-center gap-2 text-[15px]">
                    <div className="flex flex-col">
                        <div className="rounded-[5px] bg-[#F7A039] text-[55px] w-20 h-20">5</div>
                        DAYS
                    </div>
                    <div className="flex flex-col">
                        <div className="rounded-[5px] bg-[#F7A039] text-[55px] w-20 h-20">20</div>
                        HOURS
                    </div>
                    <div className="flex flex-col">
                        <div className="rounded-[5px] bg-[#F7A039] text-[55px] w-20 h-20">12</div>
                        MINUTES
                    </div>
                    <div className="flex flex-col">
                        <div className="rounded-[5px] bg-[#F7A039] text-[55px] w-20 h-20">39</div>
                        SECONDS
                    </div>
                </div>
                <div className="flex flex-row justify-between w-full items-center my-2">
                    <div className="text-[22px]">RAISED:</div>
                    <div className="text-[18px] text-[#F7A039]">$ 1,435,379.01 / $2,000,000</div>
                </div>
                <div className="flex flex-row w-full">
                    <div className="w-1/4 h-1/2 border-b-2 border-[white]"></div>
                    <div className="w-1/2 text-center text-[15px] text-[#F7A039]">1 BCF = $0.000375</div>
                    <div className="w-1/4 h-1/2 border-b-2 border-[white]"></div>
                </div>
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-col w-2/5">
                        <div className="my-2">Amount you pay</div>
                        <div className="flex flex-row justify-between bg-[#0D0B33] rounded-[5px] items-center">
                            <div className="text-[#F7A039] text-[15px] font-[600] my-2 ml-4">5</div>
                            <div className="flex flex-row items-center my-1 border-l-2 border-[gray] pl-2">
                                <Image alt="vector" src="/vector.png" width="10" height="10"></Image>
                                <Image alt="coin-1" src="/coin-1.png" width="40" height="20"></Image>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="my-2">PALMSHIBA you receive</div>
                        <div className="flex flex-row justify-between bg-[#0D0B33] rounded-[5px] items-center">
                            <div className="text-[#F7A039] text-[15px] font-[600] my-2 ml-4">5334.00</div>
                            <div className="my-1">
                                <Image alt="coin-0" src="/coin-0.png" width="40" height="20"></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#0D0B33] rounded-[5px] items-center text-center font-['Share Tech Mono'] text-[15px] py-2 my-2">
                    Connect Wallet
                </div>
                <div className="w-full bg-[#0D0B33] rounded-[5px] items-center text-center font-['Share Tech Mono'] text-[15px] py-2 my-2">
                    How to buy
                </div>
            </div>
            <div className="flex justify-end w-full relative">
                <Image className="absolute right-0 top-10" alt="union" src="/Union.png" width="400" height="400"></Image>
                <Image className="my-10" alt="palmshiba" src="/palmshiba.png" width="400" height="400"></Image>
                <Image className="absolute right-[360px] top-10" alt="footprint" src="/footprint-1.png" width="100" height="100"></Image>
                <Image className="absolute right-[320px] bottom-1/4" alt="circle" src="/circle.png" width="100" height="100"></Image>
            </div>
        </div>
    </>
    );
}