import DarkModeBtn from "../darkModeBtn";

const NavBar = () => {
    return (
        <div className="navbar shadow-sm border-b border-app-teal flex items-center">
            <div className="flex-1">
                <h1 className="text-white">Nimai Charan</h1>
            </div>
            <div className="flex-none">
                <DarkModeBtn />
            </div>
        </div>
    );
};

export default NavBar;
