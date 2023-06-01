import Design from "../../components/Design";
import Hero from "./Hero";
import Highlight from "./Highlight";
import Titans from "./Titans";

function Homepage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <Highlight />
          <Design />
          <Titans />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
