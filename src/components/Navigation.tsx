import { NavLink } from "react-router";
import { Home, Heart, ArrowLeftRight, Clock } from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/mylife", icon: Heart, label: "My Life" },
  { to: "/compare", icon: ArrowLeftRight, label: "Compare" },
  { to: "/history", icon: Clock, label: "History" },
];

const Navigation = () => {
  return (
    <nav className="w-full fixed bottom-0 bg-card border-t border-border">
      <ul className="flex justify-around h-16 items-center">
        {navItems.map(({ to, icon: Icon, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${isActive ? "text-accent" : "text-subtle"}`
              }
            >
              <Icon size={20} />
              <span className="text-xs">{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
