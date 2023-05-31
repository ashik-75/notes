function CardSlider() {
  return (
    <div className="text-zinc-500">
      <div>
        <h1>Deepen your relationships.</h1>
        <p>
          Every part of Clay is impeccably designed to help you remember the
          people in your life.
        </p>
      </div>

      <div>
        <CardOne />
      </div>
    </div>
  );
}

export default CardSlider;

const CardOne = () => {
  return <div className="h-96 w-72 bg-rose-700"></div>;
};
