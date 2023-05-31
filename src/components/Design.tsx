function Design() {
  return (
    <div className="bg-black p-5">
      <div className="flex min-h-screen w-full items-center justify-center bg-[url('/clay-1.png'),url('/clay-2.png'),url('/clay-3.png')] bg-[length:100px,100px,100px] bg-[position:top_left,bottom,top_right] bg-no-repeat  md:bg-[length:400px,300px,200px] md:bg-[position:bottom_left,top_center,top_right]">
        <div className="min-h-[500px] max-w-[500px] space-y-5 rounded-md border border-zinc-700 bg-white/5 p-10 text-zinc-200 backdrop-blur-lg">
          <div className="space-y-2">
            <p className="text-xs  font-medium tracking-widest text-zinc-500">
              AN INTRODUCTION
            </p>
            <h1 className="font-aleg text-3xl">
              People are at the heart of what we do.
            </h1>
          </div>

          <div className="space-y-5 font-roboto">
            <p>
              People make us laugh, challenge us to improve, support us when
              things are tough, and celebrate with us once they get better. But
              being more generous, more responsive, more conscientious, more
              considerate with those people? That takes effort.
            </p>
            <p>
              Almost all successful people naturally identify the importance of
              conscientiousness, spending time and money to remember the most
              important parts of their careers and lives — other people.
              Personally, we grew tired of endlessly switching apps, of the
              slapdash nature of maintaining close personal and professional
              contacts in notes apps and Excel files, DMs and texts.
            </p>

            <p>
              We wanted a more streamlined and thoughtful approach for keeping
              in touch with our ever-growing network. And after searching and
              searching for something better, we built it ourselves.
            </p>

            <p>
              We subscribe to the idea that being thoughtful and helpful with
              people is still too difficult. It’s something we all know
              intuitively. To achieve more, to be more successful, to be
              happier, we need to start thinking about others first.
            </p>
            <p>If you agree, you're going to love Clay.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
