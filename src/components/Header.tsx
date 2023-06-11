import { Scan } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800 bg-white/10 p-5 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="font-poppins font-roboto text-lg text-zinc-100">
          <Link to={"/"}>
            <Scan className="h-10 w-10 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
