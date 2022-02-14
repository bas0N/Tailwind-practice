import LogoBlue from "./Assets/Scriptshare.png";
import LogoWhite from "./Assets/Scriptshare_white.png";

function Navbar() {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      <div className="navbar-start">
        <img className="mx-8 w-3/5" src={LogoWhite} />
      </div>
      <div className="hidden px-2 mx-2 navbar-end lg:flex">
        <div className="flex items-stretch"></div>
      </div>
      <div className="navbar-end mx-8 justify-between">
        <a className="btn btn-ghost  rounded-btn">Home</a>
        <a className="btn btn-ghost  rounded-btn">Portfolio</a>
        <a className="btn btn-ghost  rounded-btn">About</a>
        <a className="btn btn-ghost  rounded-btn">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
