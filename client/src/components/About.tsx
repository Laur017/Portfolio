import Image from '../assets/about-img.png'

export default function About() {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100%] about-div">
        <div className="w-[40rem] h-[60%] rounded-xl flex bg-[#F4FCF1] about-card">
            <div className='w-[40%]'>
                <div className='h-[30%] flex flex-col justify-center pl-[0.5rem] border-[#404A3C] border-b-[4px] st-about'>
                    <h2 className='text-[#8BB77C] text-[1.5rem] flex items-center gap-[1rem]'>POPA<p className='text-[#404A3C] text-[0.8rem]'>17.08.2001</p></h2>
                    <h2 className='text-[#8BB77C] text-[1.5rem]'>LAURENTIU</h2>
                </div>
                <div className='h-[40%] flex flex-col justify-center items-center border-b-[4px] text-xs pl-[0.5rem] font-light tracking-[0.15rem] border-[#404A3C]'>
                    <p>
                        Hi there, my name is Laurentiu a student
                        who is responsable, adaptable, fast learner an good in communication
                    </p>
                </div>
                <div className='h-[30%] flex flex-col justify-center items-center text-xs pl-[0.5rem]  tracking-[0.15rem]'>
                    <p>
                        Let's connect and
                        explore opportunities for
                        collaboration and mutual
                        growth!
                    </p>
                </div>
            </div>
            <div className='w-[30%] border-l-[4px] flex flex-col justify-center items-center border-[#404A3C] nd-about'>
                <div className='h-[30%] w-[100%] text-center flex justify-center items-center border-b-[4px] border-[#404A3C] fe-p'>
                    <p>FRONTEND DEVELOPER</p>
                </div>

                <div className='h-[70%] flex flex-col justify-center items-center socials-about'>
                    <p>socials a</p>
                    <p>socials b</p>
                    <p>socials c</p>
                </div>
            </div>
            <div className='w-[30%] flex flex-col justify-center items-center border-l-[4px] border-[#404A3C] rd-about'>
                <div  className='w-[100%] h-[70%] flex justify-center items-center'>
                    <img src={Image} />
                </div>
                <div className='h-[30%] w-[100%] border-t-[4px] flex justify-center items-center border-[#404A3C] res-about'>
                    <p>Resume</p>
                </div>
            </div>
        </div>
    </div>
  )
}
