import { useState } from "react";

export default function BGToggle() {
  const [bgColor, setBGColor] = useState("whitesmoke");

  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className="bg-toggle-wrapper"
    >
      <button
        className="toggle-btn"
        onClick={() =>
          setBGColor((c) => (c === "whitesmoke" ? "crimson" : "whitesmoke"))
        }
      >
        toggle me
      </button>
    </div>
  );
}
