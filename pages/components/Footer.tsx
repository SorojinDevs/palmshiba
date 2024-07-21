import Image from "next/image";

export default function Footer () {
    return (
    <>
        <div className="flex flex-row justify-between border-t-2 border-[gray] text-[white] mx-20 py-10">
            <div>Copyright © 2024 PALMSHIBA. All Rights Reserved</div>
            <div className="underline">Terms and Conditions</div>
        </div>
    </>
    );
}
