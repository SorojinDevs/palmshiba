export default function Token () {
    return (
    <>
        <div className="flex flex-col text-[white] my-5">
            <div className="text-center text-[#F04C25] text-[25px] font-[700]">TOKENOMICS</div>
            <div className="flex flex-col border-dashed border-2 border-[#F04C25] rounded-[10px] mx-5 my-5">
                <div className="flex flex-row justify-between">
                <div className="flex flex-col mx-4 w-[100px]">
                        <div className="w-full h-[100px] bg-[#141746] border-[#F04C25] border-2 rounded-[50%] flex justify-center items-center text-center text-[35px] font-[800] mt-8 mb-4">
                            <div>30%</div>
                        </div>
                        <div className="text-[20px] font-[600] text-center">Presale</div>
                    </div>
                    <div className="flex flex-col mx-4 w-[100px]">
                        <div className="w-full h-[100px] bg-[#141746] border-[#F04C25] border-2 rounded-[50%] flex justify-center items-center text-center text-[35px] font-[800] mt-8 mb-4">
                            <div>20%</div>
                        </div>
                        <div className="text-[20px] font-[600] text-center">Staking</div>
                    </div>
                    <div className="flex flex-col mx-4 w-[100px]">
                        <div className="w-full h-[100px] bg-[#141746] border-[#F04C25] border-2 rounded-[50%] flex justify-center items-center text-center text-[35px] font-[800] mt-8 mb-4">
                            <div>20%</div>
                        </div>
                        <div className="text-[20px] font-[600] text-center">Community Rewards</div>
                    </div>
                    <div className="flex flex-col mx-4 w-[100px]">
                        <div className="w-full h-[100px] bg-[#141746] border-[#F04C25] border-2 rounded-[50%] flex justify-center items-center text-center text-[35px] font-[800] mt-8 mb-4">
                            <div>10%</div>
                        </div>
                        <div className="text-[20px] font-[600] text-center">DEX/CEX Liquidity</div>
                    </div>
                    <div className="flex flex-col mx-4 w-[100px]">
                        <div className="w-full h-[100px] bg-[#141746] border-[#F04C25] border-2 rounded-[50%] flex justify-center items-center text-center text-[35px] font-[800] mt-8 mb-4">
                            <div>20%</div>
                        </div>
                        <div className="text-[20px] font-[600] text-center">Marketing</div>
                    </div>
                </div>
                <div className="flex justify-center items-center text-[20px] py-3">
                    <span className="text-[#F04C25] mx-3">Token Supply:</span>69.000.000.000
                </div>
            </div>
        </div>
    </>
    );
}