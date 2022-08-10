import { useState, useEffect } from "react";

export default function FizzBuzz() {
  const [count, setCount] = useState(0);
  const [isFizz, setFizz] = useState(false);
  const [isBuzz, setBuzz] = useState(false);

  useEffect(() => {
    setFizzBuzzState();
  }, [count]);

  const setFizzBuzzState = () => {
    if (count % 3 === 0 && count % 5 === 0) {
      setFizz(true);
      setBuzz(true);
    } else if (count % 5 === 0) {
      setBuzz(true);
      setFizz(false);
    } else if (count % 3 === 0) {
      setFizz(true);
      setBuzz(false);
    } else {
      setBuzz(false);
      setFizz(false);
    }
  };

  const fizzBuzzCounter = () => {
    if (isFizz && isBuzz) {
      return "FizzBuzz";
    }
    if (isFizz) {
      return "Fizz";
    }

    if (isBuzz) {
      return "Buzz";
    }

    return count;
  };

  return (
    <div className="fb-container">
      <div className="fb-count">{fizzBuzzCounter()}</div>
      <div className="btn-wrapper">
        <button onClick={() => setCount((c) => (c > 0 ? c - 1 : 0))}>
          sub
        </button>
        <button onClick={() => setCount((c) => c + 1)}>add</button>
      </div>
    </div>
  );
}
