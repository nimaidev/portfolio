import DarkModeBtn from "../darkModeBtn";

const NavBar = () => {
  return (
    <div className="navbar shadow-sm">
      <div className="flex-1">
        <h1 className="text-white mb-4">Nimai Charan</h1>
      </div>
      <div className="flex-none">
        <DarkModeBtn />
      </div>
    </div>
  );
};

export default NavBar;
