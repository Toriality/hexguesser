import { useState } from "react";
import { getRandomColor } from "./utils";
import Header from "./components/Header";
import HexCard from "./components/HexCard";
import GuessForm from "./components/GuessForm";
import Footer from "./components/Footer";

function App() {
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [guess, setGuess] = useState("");
  const [isGuessing, setIsGuessing] = useState(true);
  const [color, setColor] = useState(getRandomColor());

  return (
    <div
      className="h-screen flex flex-col items-center p-4 transition duration-500"
      style={{
        backgroundColor: isHoveringCard ? color : "white",
      }}
    >
      <Header />
      <HexCard
        color={color}
        guess={guess}
        isGuessing={isGuessing}
        setIsHoveringCard={setIsHoveringCard}
      />
      <GuessForm
        guess={guess}
        setGuess={setGuess}
        setIsGuessing={setIsGuessing}
        isGuessing={isGuessing}
        color={color}
        setColor={setColor}
      />
      <Footer />
    </div>
  );
}

export default App;
