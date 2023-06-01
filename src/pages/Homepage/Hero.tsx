import { ArrowRight, Indent } from "lucide-react";
import ReactPlayer from "react-player";

function Hero() {
  return (
    <div>
      <section className="relative min-h-screen w-full overflow-hidden px-5 pt-20 sm:pt-28">
        <div className="absolute inset-0 -z-[11] bg-black"></div>
        <div className="absolute inset-0 -z-[2] bg-gradient-to-b from-black/40 to-black/90"></div>
        <video
          autoPlay
          loop
          muted
          src="/galaxy.mp4"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        ></video>
        <div className="mx-auto my-20 max-w-7xl space-y-12">
          <div className="flex justify-center">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-purple-600 blur transition group-hover:-inset-1"></div>
              <button className="relative flex flex-col items-center divide-zinc-500 rounded bg-zinc-900 px-4 py-2 text-zinc-50 sm:flex-row sm:divide-x">
                <div className="flex gap-5 pr-2">
                  <span>
                    <Indent className="h-5 w-5" />
                  </span>
                  <span>Go to Preview</span>
                </div>
                <span className="pl-2 tracking-wide text-zinc-300">
                  The first Ai navigator for your entire network
                </span>
              </button>
            </div>
          </div>

          <div className=" space-y-10 text-center text-white">
            <h1 className="font-aleg text-3xl sm:text-7xl">
              Unlock the full power of your relationships
            </h1>
            <p className="mx-auto max-w-xl text-center font-roboto  text-2xl ">
              AI powered tools for cultivating amazing personal and professional
              relationships.
            </p>

            <div className="flex justify-center">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-700  to-purple-700 opacity-50 blur transition duration-500 group-hover:opacity-100 group-hover:duration-200 "></div>
                <button className="relative flex items-center gap-4 rounded-full bg-white px-4 py-2 font-bold uppercase tracking-[4px] text-black">
                  <span>Get Play Free</span>
                  <span>
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="apect-video min-h-40 relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-zinc-700 ">
            {/* <video src="/prev.mp4" autoPlay={true} onPlay={true}></video> */}
            <ReactPlayer
              url={"/prev.mp4"}
              width={"100%"}
              height={"100%"}
              // controls
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
