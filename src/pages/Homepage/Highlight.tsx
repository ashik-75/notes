function Highlight() {
  return (
    <div className="space-y-12 bg-[url('/clay-4.jpg')] bg-[length:700px] bg-[position:center] bg-no-repeat py-20 text-zinc-300">
      <div className="space-y-4">
        <h1 className="font-aleg text-3xl tracking-wider">
          Cultivate serendipity.
        </h1>
        <p className="max-w-md text-justify font-roboto text-lg">
          Every feature in Clay is intentionally crafted to introduce
          serendipity and chance into your network, to recreate that feeling of
          running into someone on the street or seeing an old friend.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {/* left */}
        <div className="space-y-3">
          <Card />
          <Card />
        </div>

        {/* middle */}
        <div className="space-y-5">
          <SpecialCard />
          <Card />
        </div>

        {/* right */}
        <div className="space-y-3">
          <h1 className=" font-aleg text-xl">See the big picture</h1>
          <p className="font-roboto text-[17px] text-zinc-300">
            Never miss a beat with Explore — a powerful, high-level view of all
            the updates from your entire network. Be the first to congratulate
            someone when they change jobs, or when they're mentioned in
            thousands of top print and digital publications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Highlight;

function Card() {
  return (
    <div className="flex gap-5 rounded border border-zinc-800 bg-zinc-500/20 px-5 py-3 backdrop-blur-lg">
      <div className="h-7 w-7 overflow-hidden rounded-full">
        <img
          src="https://source.unsplash.com/3TLl_97HNJo/100x100/"
          alt=""
          className="object-cover"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-5">
          <h1 className="font-dm-mono font-bold tracking-wide">
            Tinker heartfiled
          </h1>
          <div className="flex gap-2">
            <span className="block h-2 w-2 rounded-full bg-yellow-500"></span>
            <span className="block h-2 w-2 rounded-full bg-rose-500"></span>
            <span className="block h-2 w-2 rounded-full bg-teal-500"></span>
          </div>
        </div>

        <ul className="flex gap-2 text-[12px] uppercase text-zinc-400">
          <li>Bio Change</li>
          <li>yesterday</li>
          <li>via twitter</li>
        </ul>

        <div>
          <p className="text-sm ">Alex Just Joined</p>
        </div>
      </div>
    </div>
  );
}
function SpecialCard() {
  return (
    <div className="flex gap-5 rounded border border-zinc-800 bg-zinc-600/10 px-4 py-2 backdrop-blur-lg">
      <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full">
        <img src="/love.jpg" alt="" className="h-full w-full object-cover" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-5">
          <h1 className="font-dm-mono font-bold tracking-wide">
            Tinker heartfiled
          </h1>
          <div className="flex gap-2">
            <span className="block h-2 w-2 rounded-full bg-yellow-500"></span>
            <span className="block h-2 w-2 rounded-full bg-rose-500"></span>
            <span className="block h-2 w-2 rounded-full bg-teal-500"></span>
          </div>
        </div>

        <ul className="flex gap-2 text-[10px] uppercase text-zinc-400">
          <li>Apr 8</li>
          <li>Apr 9</li>
          <li>Apr 21</li>
        </ul>

        <div className="flex space-x-2">
          <div className="h-7 w-7 overflow-hidden rounded-full">
            <img
              src="https://source.unsplash.com/pAtA8xe_iVM/100x100/"
              alt=""
              className="object-cover"
            />
          </div>
          <div className="h-7 w-7 overflow-hidden rounded-full">
            <img
              src="https://source.unsplash.com/Zz5LQe-VSMY/100x100/"
              alt=""
              className="object-cover"
            />
          </div>
          <div className="h-7 w-7 overflow-hidden rounded-full">
            <img
              src="https://source.unsplash.com/DItYlc26zVI/100x100/"
              alt=""
              className="object-cover"
            />
          </div>
          <div className="h-7 w-7 overflow-hidden rounded-full">
            <img
              src="https://source.unsplash.com/7YVZYZeITc8/400x400/"
              alt=""
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className=" ">
            you added <span className="font-bold text-pink-500">10</span>{" "}
            people, wrote <span className="font-bold text-teal-500">9</span>{" "}
            notes and attend <span className="font-bold text-blue-500">5</span>{" "}
            events
          </p>
        </div>
      </div>
    </div>
  );
}
