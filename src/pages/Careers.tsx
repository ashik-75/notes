function Careers() {
  return (
    <div className="min-h-screen space-y-16 bg-black px-5 py-32 text-zinc-300">
      <div className="mx-auto max-w-7xl">
        <div className="relative aspect-video">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-black/90"></div>
          <img
            src="https://source.unsplash.com/NuFUbftUu_s/1920X1080"
            className=" h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="mx-auto  max-w-xl space-y-8">
        <p className="text-xs uppercase tracking-[5px] text-zinc-400">
          WORK WITH US
        </p>

        <h2 className="font-ibm text-2xl tracking-wider">
          We're building a team of stellar individuals with a wide range of
          voices, ideas, and backgrounds to help us shape Clay — the future of
          professional relationships.
        </h2>

        <h3 className="font-ibm ">
          You'll help set the tone and direction for your domain of expertise
          while working alongside a highly collaborative and multidisciplinary
          team.
        </h3>

        <h5 className="font-ibm ">
          Even if you don't see a role you're looking for, please reach out!
          We’re always looking for smart, talented individuals to join us.
        </h5>
      </div>
    </div>
  );
}

export default Careers;
