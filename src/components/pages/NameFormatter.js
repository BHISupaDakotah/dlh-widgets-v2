import { useState } from "react";

export default function NameFormatter() {
  const [fName, setFName] = useState("");

  const handleInput = () => {
    const firstLetter = fName.charAt(0).toUpperCase();
    const otherLeters = fName.slice(1).toLowerCase();

    return firstLetter + otherLeters;
  };

  return (
    <div className="name-formatter-container">
      <h1 className="name-title">Name Formatter</h1>
      <form>
        <input
          className="fname"
          placeholder="First Name"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
      </form>

      <h3 className="nf-result">{handleInput()}</h3>
    </div>
  );
}
