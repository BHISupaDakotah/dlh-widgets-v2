import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>

      <div>
        <NavLink to="/1">Name Formatter</NavLink>
      </div>

      <div>
        <NavLink to="/2">Background Toggle</NavLink>
      </div>

      <div>
        <NavLink to="/3">Leap Year</NavLink>
      </div>

      <div>
        <NavLink to="/4">Poke API</NavLink>
      </div>

      <div>
        <NavLink to="/5">8-Ball</NavLink>
      </div>

      <div>
        <NavLink to="/6">Reverse</NavLink>
      </div>

      <div>
        <NavLink to="/7">FizzBuzz</NavLink>
      </div>
    </div>
  );
}
