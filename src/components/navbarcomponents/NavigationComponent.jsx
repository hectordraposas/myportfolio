import { NavLink } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <ul className="flex gap-1 justify-between pr-5">
      <li className="p-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "bg-amber-500 rounded-md p-3" : ""}  `
          }
        >
          Home
        </NavLink>
      </li>
      <li className="p-3">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "bg-amber-500 rounded-md p-3" : ""}  `
          }
        >
          About
        </NavLink>
      </li>
      <li className="p-3">
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${isActive ? "bg-amber-500 rounded-md p-3" : ""}  `
          }
        >
          Projects
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationComponent;
