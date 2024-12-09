import Link from "next/link"
import Image from "next/image"



export default function Herosection (){
    return (
        <>
         <div className=" items-center p-4 bg-[#F5F5F5] text-center">
       <h3 className="font-semibold text-black text-xl">Hello Nike App</h3>
       <p className="text-gray-800">Download the app to access everything Nike.<span className="font-semibold underline"><Link href="/">Get the Great</Link></span></p>
        </div >
        
        <Image src="/hero.png" alt="hero slider"  width={1344} height={700}/>

        <div className="flex flex-col items-center p-4 text-center">
    <p className="text-sm">First Look</p>
    <h3 className="font-semibold text-black text-3xl mt-1">NIKE AIR MAX PULSE</h3>
    <p className="text-gray-800 max-w-xl text-[15px] mt-3">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
    —designed to push you past your limits and help you go to the max.</p>
</div>
<div className="flex place-content-center gap-x-2">
    <button className="bg-black p-2 rounded-full text-white px-4">Notify Me</button>
    <button className="bg-black p-2 rounded-full text-white px-4">Shop Air Max</button>
</div>
        </>
    )
}