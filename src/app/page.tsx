export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src="/surprisedPikachu.jpg"
        alt="Surprised Pikachu Meme"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vh] w-auto object-contain"
      />
    </div>
  )
}