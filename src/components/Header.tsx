import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <div className="fixed left-0 top-0 z-50 w-full border-b border-zinc-700 bg-white/10 p-5 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="font-poppins text-lg font-bold text-zinc-100">
          <Link to={"/"}>CLAY</Link>
        </div>

        <ul className="hidden space-x-6 text-xs tracking-[4px] text-zinc-500 sm:flex">
          <li>
            <Link to={"/stories"}>STORIES</Link>
          </li>
          <li>
            <Link to={"/career"}>CAREER</Link>
          </li>
          <li>
            <Link to={"/pricing"}>PRICING</Link>
          </li>
          <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
        </ul>

        <div className="hidden gap-5 space-x-4 sm:flex">
          <button className="rounded-full bg-zinc-800 px-3 py-1 text-xs uppercase tracking-wider text-zinc-300">
            sign in
          </button>
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 blur transition group-hover:-inset-1"></div>
            <button className="relative rounded-full bg-white from-pink-600 to-yellow-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              get free access
            </button>
          </div>
        </div>

        <MobileMenu />
      </div>
    </div>
  );
}

export default Header;
