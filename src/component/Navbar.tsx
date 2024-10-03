import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar bg-[#2C3E50] fixed top-0 left-0 w-full z-50">
      {/* Left side: Brand/Logo */}
      <div className="flex-none">
        <a className="btn btn-ghost text-3xl hover:text-[#6D86A1]">Portfolio.</a>
      </div>

      {/* Center: Links */}
      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal flex space-x-8 text-lg text-[#ECF0F1]">
          <li>
            <Link
              activeClass="active-link" // This class will be applied when the link is active
              to="home"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="cursor-pointer hover:text-[#6D86A1]" // Hover color (light blue-gray)
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="cursor-pointer hover:text-[#6D86A1]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="skills"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="cursor-pointer hover:text-[#6D86A1]"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="service"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="cursor-pointer hover:text-[#6D86A1]"
            >
              Services
            </Link>
          </li>
        </ul>
      </div>

      {/* Right side: Button */}
      <div className="flex-none">
        <button className="btn text-[#ECF0F1] bg-[#1A252F] hover:bg-[#4A6787] btn-neutral">
          Contacts
        </button>
      </div>

      {/* Styling for active links */}
      <style>{`
        .active-link {
          color: #4A6787; /* Lighter blue-gray for active links */
          font-weight: bold; /* Optional: Makes the active link stand out more */
        }
      `}</style>
    </div>
  );
};

export default Navbar;
