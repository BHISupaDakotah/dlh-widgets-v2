import { useState } from "react";

export default function LeapYear() {
  const [isLeapYear, setIsLeapYear] = useState("");

  const handleLeapYear = () => {
    if (
      (isLeapYear > 1600 && isLeapYear % 4 === 0 && isLeapYear % 100 !== 0) ||
      isLeapYear % 400 === 0
    ) {
      return "Leap Year";
    } else {
      return "Not a leap year";
    }
  };
  return (
    <div className="lp-wrapper">
      <h1 className="lp-title">is it a leap year?</h1>
      <form>
        <input
          type="number"
          className="leap-year"
          placeholder="Enter Year"
          onChange={(e) => setIsLeapYear(e.target.value)}
          value={isLeapYear}
        />
      </form>

      <h3 className="is-leap-year">{handleLeapYear()}</h3>
    </div>
  );
}
