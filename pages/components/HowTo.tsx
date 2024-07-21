import Image from "next/image";

export default function HowTo () {
    return (
    <>
        <div className="flex flex-col text-[white] pb-20">
            <div className="relative w-full py-10 text-center font-[600] font-['Holtwood One SC'] text-[40px]">
                HOW TO <span className="text-[#F7A039]">BUY</span> PALMSHIBA
                <Image className="absolute left-20 top-0" alt="palm" src="/palm-2.png" width="150" height="150"></Image>
            </div>
            <div className="flex flex-col md:flex-row justify-between mx-20">
                <div className="flex flex-col relative w-[300px] pt-20 px-5 my-2 md:my-0">
                    <Image className="absolute left-0 top-10 z-0" alt="subtract" src="/Subtract.png" width="300" height="240"></Image>
                    <div className="z-10 text-[#F04C25] text-[20px]">
                        Set Up Your Wallet
                    </div>
                    <div className="z-10">
                        Switch to BNB network and press the connect button to choose one of the many supported wallets to connect to the website
                    </div>
                    <div className="absolute right-0 top-0 flex items-center justify-center rounded-[10px] bg-[#141746] border-2 border-[white] w-20 h-16">
                        <Image className="" alt="howto" src="/howto-1.png" width="50" height="50"></Image>
                    </div>
                </div>
                <div className="flex flex-col relative w-[300px] pt-20 px-5 my-5 md:my-0">
                    <Image className="absolute left-0 top-10 z-0" alt="subtract" src="/Subtract.png" width="300" height="240"></Image>
                    <div className="z-10 text-[#F04C25] text-[20px]">
                        Buy with BNB, ETH or USDT
                    </div>
                    <div className="z-10">
                        You use either use BNB or USDT to purchase Bichon tokens from this presale
                    </div>
                    <div className="absolute right-0 top-0 flex items-center justify-center rounded-[10px] bg-[#141746] border-2 border-[white] w-20 h-16">
                        <Image className="" alt="howto" src="/howto-2-1.png" width="50" height="50"></Image>
                    </div>
                </div>

                <div className="flex flex-col relative w-[300px] pt-20 px-5 mt-10 md:my-0">
                    <Image className="absolute left-0 top-10 z-0" alt="subtract" src="/Subtract.png" width="300" height="240"></Image>
                    <div className="z-10 text-[#F04C25] text-[20px]">
                        Claim Your Tokens
                    </div>
                    <div className="z-10">
                        When the pre-sale has been completed, You will be able to claim your tokens using the claim button.
                    </div>
                    <div className="absolute right-0 top-0 flex items-center justify-center rounded-[10px] bg-[#141746] border-2 border-[white] w-20 h-16">
                        <Image className="" alt="howto" src="/howto-3.png" width="50" height="50"></Image>
                    </div>
                </div>

            </div>
        </div>
    </>
    );
}