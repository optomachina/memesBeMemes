import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <h1 className="absolute top-4 left-4 text-4xl font-bold z-10">2</h1>
      <div className="relative h-full aspect-auto">
        <Image
          src="/surprisedPikachu.jpg"
          alt="Surprised Pikachu Meme"
          fill
          className="object-contain"
          priority
          sizes="100vw"
          quality={100}
        />
      </div>
    </div>
  )
}