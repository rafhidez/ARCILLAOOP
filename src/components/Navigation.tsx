import { NavLink } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navigation() {
  return (
    <nav className="gallery-nav">
      <div className="text-xl font-bold tracking-tighter uppercase font-headline">
        Rafael Yeshua Arcilla
      </div>
      <div className="flex gap-12">
        <NavLink 
          to="/" 
          className={({ isActive }) => cn("nav-link", isActive ? "nav-link-active border-b-2 border-accent-blue pb-1" : "nav-link-inactive")}
        >
          Home
        </NavLink>
        <NavLink 
          to="/midterm" 
          className={({ isActive }) => cn("nav-link", isActive ? "nav-link-active border-b-2 border-accent-blue pb-1" : "nav-link-inactive")}
        >
          Midterm
        </NavLink>
      </div>
    </nav>
  );
}
