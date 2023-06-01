function Stories() {
  return (
    <div className="min-h-screen bg-black px-5 py-32">
      <div className="mx-auto max-w-7xl space-y-10 text-zinc-300">
        <div className="space-y-5">
          <p className="text-sm tracking-[2px] text-zinc-600 sm:tracking-[5px]">
            TWO HUNDRED THOUSAND INDEX CARDS
          </p>

          <h1 className="font-ibm text-4xl">
            The Art & Science Of Thoughtfulness
          </h1>

          <p className="max-w-xl font-roboto text-lg">
            We ascribe to the idea that being thoughtful and helpful with people
            is still too difficult. It's something we all know intuitively. To
            achieve more, to be more successful, to be happier, we need to start
            thinking about others first. Inspired by some of the most successful
            past solutions, we set out to build a digital tool anyone could use
            to be more thoughtful.
          </p>
        </div>

        <div className="aspect-video">
          <img
            src="https://source.unsplash.com/LCcFI_26diA/1920X1080"
            className="h-full w-full rounded-xl object-cover object-center"
            alt=""
          />
        </div>
      </div>

      <div className="my-10 h-[.5px] bg-zinc-800"></div>

      <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-5 text-zinc-200 sm:grid-cols-3">
        {stories.map((story) => (
          <div key={story.id} className="space-y-5">
            <div className="overflow-hidden rounded-xl">
              <img src={story.image} alt="" />
            </div>

            <div>
              <h5 className="text-sm uppercase text-zinc-400">
                {/* @ts-expect-error */}
                {story.date?.toDateString()}
              </h5>
              <h1 className="font-ibm text-2xl font-medium">{story.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;

interface StoryType {
  id: number;
  image: string;
  date: object;
  title: string;
}

const stories: StoryType[] = [
  {
    id: 1,
    image: "https://source.unsplash.com/ICTKcvnXx_8/200X200",
    date: new Date(),
    title: "Making our production SwiftUI app 100x faster",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/sOObVT48N3I/200X200",
    date: new Date(),
    title: "Instantly Have Better Conversations",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/tLG2hcpITZE/200X200",
    date: new Date(),
    title: "Our Best Lives Were Never Meant to Be Lived Alone",
  },
];
