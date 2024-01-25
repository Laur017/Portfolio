import Hand from '.././assets/hand.png'
import Hello from '../assets/hello-img.png'

export default function Home() {
  return (
    <div className="flex flex-col border w-[80%] justify-center items-center h-[80%] rounded-b-lg">
        <h2 className='flex items-center gap-4 text-[2rem]'>Hello There <img src={Hand} className='w-[3rem] wave-hand'/> I'm </h2>
        <h1 className="text-[#8BB77C] text-[6rem]">Laurentiu</h1>
        <h2 className='text-[2rem]'>frontend developer</h2>
        <img src={Hello} className='w-[20%]'/>
    </div>
  )
}
