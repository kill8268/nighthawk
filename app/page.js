import Image from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import themoviedb from "@/lib/themoviedb"

export default async function Home() {

  const { results: movie } = await themoviedb('/discover/movie')

  console.info(movie)
  
  return (
    <main className="flex min-h-screen">
      <div className="w-[200px] border border-t-0 border-b-0 border-l p-2">
        <div className="text-2xl font-semibold">hi</div>
      </div>
      <div className="flex-1 p-2 grid grid-cols-5 gap-4">
        {movie.map(item => (
          <div key={item.id}>
            <AspectRatio ratio={1 / 1.6} className="bg-muted">
              <Image
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="backdrop_path"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
            <div className="text-2xl font-semibold">{item.title}</div>
            {/* <div className="text-sm">
              {item.overview}
            </div> */}
          </div>
        ))}
      </div>
    </main>
  )
}
