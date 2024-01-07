import { useEffect, useRef } from "react";
import { getRandomColor, convertToSixDigits } from "../utils";

export default function GuessForm({
  guess,
  setGuess,
  setIsGuessing,
  isGuessing,
  color,
  setColor,
}) {
  const isGuessValid = /^([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(guess);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleGuess() {
    setGuess(convertToSixDigits(guess));
    setIsGuessing(false);
    inputRef.current.disabled = true;
    submitRef.current.focus();
  }

  function handleNext() {
    setColor(getRandomColor());
    setGuess("");
    setIsGuessing(true);
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  const submitRef = useRef();
  const inputRef = useRef();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-4 text-lg sm:flex-row focus-within:scale-110 transform duration-500"
    >
      <div className="relative flex items-center">
        <p className="absolute ml-4 text-gray-500">#</p>
        <input
          ref={inputRef}
          type="text"
          className="p-2 border-2 border-gray-300 text-center text-gray-500 outline-none uppercase"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
      </div>
      <button
        ref={submitRef}
        type="submit"
        className="p-2 border-2 border-gray-300 disabled:bg-gray-400"
        style={{
          backgroundColor: isGuessValid && color,
        }}
        disabled={!isGuessValid}
        onClick={isGuessing ? handleGuess : handleNext}
      >
        <p className="mix-blend-difference text-white font-bold">
          {isGuessing ? "Guess" : "Next"}
        </p>
      </button>
    </form>
  );
}
