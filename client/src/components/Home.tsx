import Hand from '.././assets/hand.png'
import Hello from '../assets/hello-img.png'

export default function Home() {
  return (
    <div className="flex flex-col w-[100%] justify-center items-center h-[100%] home-div">
        <h2 className='flex items-center gap-4 text-[2rem]'>Hello There <img src={Hand} className='w-[3rem] wave-hand'/> I'm </h2>
        <h1 className="text-[#8BB77C] text-[6rem] name-text">Laurentiu</h1>
        <h3 className='text-[2rem]'>frontend developer</h3>
        <img src={Hello} className='w-[20%]'/>
    </div>
  )
}
