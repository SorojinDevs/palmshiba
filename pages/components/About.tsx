import Image from "next/image";

export default function About () {
    return (
    <>
        <div className="flex flex-col">
            <div className="relative text-[#F04C25] text-[40px] font-['Holtwood One SC'] font-[700] text-center w-full pt-16 pb-10">
                ABOUT US
                <Image className="absolute left-1/4 top-0" alt="footprint" src="/footprint-2.png" width="100" height="100"></Image>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="mx-20">
                    <Image alt="palmshiba" src="/palmshiba.png" width="400" height="400"></Image>
                </div>
                <div className="relative flex flex-col text-[white] w-3/5 py-10 pr-20">
                    <div className="text-[36px] font-['Holtwood One SC'] font-[600] my-5">Meet palmshiba</div>
                    <div>
                        Palmshiba is more than a mascot; it's the heart of Palmshiba. 
                        A symbol of playfulness and loyalty, Palmshiba is a 
                        community-driven crypto adventure. Dive into a world where 
                        memes meet finance, and join us as we redefine the crypto 
                        experience with Palmshiba charm.

                        Prepare for a tail-spinning adventure as you dive into the 
                        world of Palmshiba. Our fluffy mascot, Palmshiba, is not just a dog; 
                        he's the alpha of the crypto kennel!
                    </div>
                    <Image className="absolute right-20 top-0" alt="palm" src="/palm-2.png" width="100" height="100"></Image>
                </div>
            </div>
        </div>
    </>
    );
}