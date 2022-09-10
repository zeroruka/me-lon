import Image from "next/image";
import melon from "../public/images/melon.gif";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-8 lg-flex-row">
      <p1
        className="text-6xl text-white text-center group
        transition-all hover:text-9xl hover:text-green-400 hover:drop-shadow-md"
      >
        me lon
        <h1
          className="text-6xl text-yellow-400
        transition-all group-hover:delay-500 opacity-0 group-hover:opacity-100 
        group-hover:text-9xl"
        >
          le mon?
        </h1>
      </p1>
      <div
        className="relative scale-90 overflow-hidden transition-all
      hover:drop-shadow-2xl hover:invert hover:rotate-[1800deg] duration-[5s]"
      >
        <Image
          objectFit="cover"
          src={melon}
          alt="melon"
          layout="fixed"
          priority
        />
      </div>
    </div>
  ); //wtf is this shit
}
