import Image from "next/image";

export default function Gallery () {
    return (
    <>
        <div className="flex flex-col">
            <div className="flex justify-center items-center text-[#E1931E] text-[30px] font-['Holtwood One SC'] font-[700] my-5">
                <div>GALLERY</div>
            </div>
            <div className="flex flex-row justify-between px-10 py-3 w-full h-[300px]">
                <div className="bg-[url('/shiba-2.png')] bg-cover bg-no-repeat bg-center rounded-[10px] w-[300px]"></div>
                <div className="bg-[url('/palm-3.png')] bg-cover bg-no-repeat bg-center rounded-[10px] w-[600px]"></div>
            </div>
            <div className="flex flex-row justify-between px-10 py-3 w-full h-[300px]">
                <div className="bg-[url('/shiba-2.png')] bg-cover bg-no-repeat bg-center rounded-[10px] w-[600px]"></div>
                <div className="bg-[url('/palm-3.png')] bg-cover bg-no-repeat bg-center rounded-[10px] w-[300px]"></div>
            </div>
        </div>
    </>
    );
}