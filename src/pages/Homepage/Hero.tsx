import { ArrowRight, Indent } from "lucide-react";

function Hero() {
  return (
    <div>
      <section className="relative h-screen w-full overflow-hidden pt-28">
        <div className="absolute inset-0 -z-[2] bg-gradient-to-b from-black/40 to-black/90"></div>
        <video
          autoPlay
          loop
          muted
          src="/galaxy.mp4"
          className="absolute left-0 top-0 -z-10"
        ></video>
        <div className="mx-auto my-20 max-w-7xl space-y-12">
          <div className="flex justify-center">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-purple-600 blur transition group-hover:-inset-1"></div>
              <button className="relative flex divide-x divide-zinc-500 rounded bg-zinc-900 px-4 py-2 text-zinc-50">
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
            <h1 className="font-aleg text-7xl">
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
        </div>
      </section>
    </div>
  );
}

export default Hero;
