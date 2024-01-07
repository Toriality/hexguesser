import { useState } from "react";
import { hexSimilarity } from "@/utils";

export default function HexCard({ color, guess, isGuessing, setIsHoveringCard }) {
  const [rotateLeft, setRotateLeft] = useState(false);

  return (
    <div
      className={`mt-4 mb-8 h-96 w-72 rounded-lg shadow-xl border-2 border-gray-300 transition duration-500 flex justify-center items-center hover:scale-105 ${
        rotateLeft ? "hover:-rotate-2" : "hover:rotate-2"
      }`}
      style={{
        backgroundColor: color,
      }}
      onMouseOver={() => setIsHoveringCard(true)}
      onMouseOut={() => setIsHoveringCard(false)}
      onClick={() => setRotateLeft(!rotateLeft)}
    >
      <div
        className={`mix-blend-difference text-white text-center transform duration-500`}
        hidden={isGuessing}
      >
        <p className="text-4xl font-bold uppercase">{color}</p>
        <p>
          You guessed <span className="font-bold uppercase">#{guess}</span>
        </p>
        <p className="font-bold mt-4 text-2xl">{hexSimilarity(color, guess)}% correct</p>
      </div>
    </div>
  );
}
