import Link from "next/link";
import React, { useState } from 'react';

export default function Header () {
    return (
    <>
        <div className="flex justify-between px-10 py-5 text-[white]">
            <div className="font-['Helvetica'] font-[600] text-[20px] text-gradient">PALMSHIBA</div>
            <div className="flex gap-10">
                <Link href="#">About</Link>
                <Link href="#">How to buy</Link>
                <Link href="#">Claim</Link>
                <Link href="#">FAQ</Link>
            </div>
            <div className="flex items-center text-center rounded-[5px] px-5 py-3 font-['Helvetica'] font-[500] text-[15px] gradient-border">Connect Wallet</div>
        </div>
    </>
    );
}