import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Header = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="save">
        <div onClick={() => setIsDarkMode((prev) => !prev)}>
          {isDarkMode ? <MdDarkMode size="2em" /> : <CiLight size="2em" />}
        </div>
      </button>
    </div>
  );
};

export default Header;
