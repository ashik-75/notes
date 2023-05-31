const persons = [
  {
    id: 1,
    name: "Julia Smith",
    image: "https://source.unsplash.com/JN0SUcTOig0/400x400",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://source.unsplash.com/C8Ta0gwPbQg/400x400/",
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: "https://source.unsplash.com/IF9TK5Uy-KI/400x400/",
  },
  {
    id: 4,
    name: "Sarah Williams",
    image: "https://source.unsplash.com/7YVZYZeITc8/400x400/",
  },
];

function Titans() {
  return (
    <div className="py-20 text-zinc-200">
      <div className="mb-10 space-y-4 text-center">
        <p className="text-xs tracking-[5px] text-zinc-500">
          TITANS OF INDUSTRY
        </p>
        <h1 className="mx-auto max-w-xl font-aleg text-3xl">
          Learn how the most thoughtful people foster meaningful relationships.
        </h1>
      </div>

      <div className=" columns-1 sm:columns-2 md:columns-3 lg:columns-4">
        {persons.map((person) => (
          <div className="space-y-4" key={person.id}>
            <div className="aspect-[4/7]">
              <img
                className="h-full w-full rounded object-cover"
                src={person.image}
              />
            </div>
            <div>
              <h1 className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">
                Interview
              </h1>
              <p className="font-aleg text-2xl hover:underline  hover:underline-offset-2">
                {person.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Titans;
