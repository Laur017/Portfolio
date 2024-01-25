import Image from '../assets/about-img.png'

export default function About() {
  return (
    <div className="flex justify-center items-center border w-[80%] h-[80%] rounded-b-lg ">
        <div className="border w-[90%] h-[50%] rounded-xl flex">
            <div className='w-[40%]'>
                <div className='h-[30%] flex flex-col justify-center border-b-[1px] pl-[0.5rem]'>
                    <h2 className='text-[#8BB77C] text-[1.5rem] flex items-center gap-[1rem]'>POPA<h4 className='text-[#F4FCF1] text-[0.8rem]'>17.08.2001</h4></h2>
                    <h2 className='text-[#8BB77C] text-[1.5rem]'>LAURENTIU</h2>
                </div>
                <div className='h-[40%] flex flex-col justify-center items-center border-b-[1px] text-xs pl-[0.5rem] font-light tracking-[0.15rem]'>
                    <p>
                        Hi there, my name is Laurentiu a student
                        who is responsable, adaptable, fast learner an good in communication
                        {/* with more than 2 years of experience. */}
                    </p>
                </div>
                <div className='h-[30%] flex flex-col justify-center items-center text-xs pl-[0.5rem]  tracking-[0.15rem]'>
                    <p>
                        {/* If u have a project,
                        trust me, I can make it
                        happen.  */}
                        Let's connect and
                        explore opportunities for
                        collaboration and mutual
                        growth!
                    </p>
                </div>
            </div>
            <div className='w-[30%] border-l-[1px] flex flex-col justify-center items-center'>
                <div className='h-[30%] text-center flex justify-center items-center border-b-[1px]'>
                    <p>FRONTEND DEVELOPER</p>
                </div>

                <div className='h-[70%] flex flex-col justify-center items-center'>
                    <p>socials a</p>
                    <p>socials b</p>
                    <p>socials c</p>
                </div>
            </div>
            <div className='w-[30%] flex justify-center items-center border-l-[1px]'>
                <img src={Image} className='w-[100%]' />
            </div>
        </div>
    </div>
  )
}
