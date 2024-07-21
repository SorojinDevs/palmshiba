import Image from "next/image";
import { Collapse } from "@mui/material";
import { useState } from "react";

const Accordion = ({ title, description }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={
        "flex flex-col p-6 rounded-[16px] cursor-pointer text-black transition " + (open ? "bg-[#FFF61C]" : "bg-[#EA0070]")
      }
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center space-x-2">
        <span className="font-black text-[20px] leading-[22px]">{title}</span>
        {
            (open ? "-" : "+")
        }
      </div>
      <div className="mt-2">
        <Collapse in={open}>
          <span className="text-[16px] leading-[24px]">{description}</span>
        </Collapse>
      </div>
    </div>
  );
};

export default function FAQ () {
    return (
    <>
        <div className="flex flex-col md:flex-row px-10 my-10 text-[white]">
            <div className="flex flex-col">
                <Image alt="window" src="/window.png" width="60" height="40"></Image>
                <div className="text-[30px] font-[700]">
                    <span className="text-gradient">PALMSHIBA</span>
                    <br/>FAQ
                </div>
                <div className="text-[15px]">
                    Frequently asked questions regarding our Palmshiba 
                </div>
                <div className="px-10 pt-10">
                    <Image alt="palmshiba" src="/palmshiba.png" width="400" height="300"></Image>
                </div>
            </div>
            <div className="flex flex-col items-center max-w-[1280px] mx-auto px-5 pb-[74px]">
                <div className="flex flex-col space-y-[33.37px]">
                    <div className="flex flex-col space-y-6 flex-1">
                    <Accordion
                        number="01"
                        title="What is XRPAI?"
                        description="XRPAI is part of the XRP family of meme coins but adds more utility and value for holders by introducing staking on Ethereum for  passive rewards."
                    />
                    <Accordion
                        number="02"
                        title="How will XRPAI do staking? "
                        description="XRPAI is part of the XRP family of meme coins but adds more utility and value for holders by introducing staking on Ethereum for  passive rewards."
                    />
                    <Accordion
                        number="03"
                        title="Does XRPAI have other features?"
                        description="XRPAI is part of the XRP family of meme coins but adds more utility and value for holders by introducing staking on Ethereum for  passive rewards."
                    />
                    <Accordion
                        number="04"
                        title="What are the XRPAI tokenomics?"
                        description="XRPAI is part of the XRP family of meme coins but adds more utility and value for holders by introducing staking on Ethereum for  passive rewards."
                    />
                    <Accordion
                        number="05"
                        title="How do I find technical support?"
                        description="XRPAI is part of the XRP family of meme coins but adds more utility and value for holders by introducing staking on Ethereum for  passive rewards."
                    />
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
