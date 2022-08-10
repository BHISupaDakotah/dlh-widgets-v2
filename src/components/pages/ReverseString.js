import { useState } from "react";

export default function ReverseString() {
  const [revStr, setRevStr] = useState("");

  const handleReverseString = () => {
    if (!revStr || revStr.length < 2 || typeof revStr !== "string") {
      return "";
    }
    const revArray = [];
    const length = revStr.length - 1;

    for (let i = length; i >= 0; i--) {
      revArray.push(revStr[i]);
    }

    return revArray.join("");
  };

  return (
    <div className="revstr-wrapper">
      <div className="rev-title">reverse a string</div>

      <form>
        <input
          className="rev-input"
          placeholder="enter anything"
          onChange={(e) => setRevStr(e.target.value)}
          value={revStr}
        />
      </form>
      <div className="revstr-output">{handleReverseString()}</div>
    </div>
  );
}
