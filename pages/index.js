import Image from "next/image";
import React, { useState } from "react";
import melon from "../public/images/melon.gif";

let x = 0;
export default function Home() {
  const [effect, setEffect] = useState(false);
  return (
    <div className=" overflow-hidden flex flex-col items-center justify-center w-full h-screen space-y-8 lg-flex-row">
      <button
        className={`${
          effect && "animate-button"
        } rounded-full text-white bg-lime-500 w-20 h-18 hover:bg-red-400
        transition-all`}
        onClick={() => {
          if (x == 0) {
            x++;
            document
              .getElementById("gif")
              .classList.add("hover:translate-x-[1000px]");
            document.getElementById("melon").classList.add("scale-x-[1.2]");
          } else if (x == 1) {
            x++;
            document.getElementById("melon").classList.remove("scale-x-[1.2]");
            document.getElementById("melon").classList.add("scale-x-[1.6]");
            document
              .getElementById("gif")
              .classList.remove("hover:translate-x-[1000px]");
            document
              .getElementById("gif")
              .classList.toggle("hover:translate-x-[-1000px]");
          } else if (x == 2) {
            document.getElementById("melon").classList.remove("scale-x-[1.6]");
            document.getElementById("melon").classList.toggle("scale-x-[2.5]");
            document.getElementById("melon").classList.add("text-red-300");
            document.getElementById("gif").classList.toggle("scale-x-[2]");
            document
              .getElementById("gif")
              .classList.remove("hover:translate-x-[1000px]");
            document
              .getElementById("gif")
              .classList.remove("hover:translate-x-[-1000px]");
            x++;
          } else if (x > 2) {
            document.getElementById("melon").classList.remove("text-red-300");
            document.getElementById("melon").classList.toggle("scale-x-[2.5]");
            document.getElementById("gif").classList.toggle("scale-x-[2]");
            x = 0;
          }
          setEffect(true);
        }}
        onAnimationEnd={() => setEffect(false)}
      >
        ???{x}???
      </button>
      <p1
        id="melon"
        className="text-6xl text-white text-center group
        transition-all hover:text-9xl hover:text-green-400 hover:drop-shadow-md tranform-gpu"
      >
        me lon
        <h1
          className="text-6xl text-yellow-400
        transition-all group-hover:delay-500 opacity-0 group-hover:opacity-100 
        group-hover:text-9xl transform-gpu"
        >
          le mon?
        </h1>
      </p1>
      <div
        id="gif"
        className="relative scale-90 overflow-hidden transition-all
      hover:invert hover:rotate-[1800deg] duration-[5s] transform-gpu"
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
  ); //wtf is this lol
}
