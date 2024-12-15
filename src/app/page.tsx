import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-[200vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center">
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
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">2</h1>
      </div>
    </main>
  )
}