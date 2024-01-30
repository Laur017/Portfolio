import ContactImg from '../assets/contact.png'

export default function Contact() {
  return (
    <div className="w-[80%] h-[80%] flex justify-center items-center">
        <div className='bg-[#F4FCF1] w-[40rem] h-[60%] flex items-center rounded-[0.5rem] justify-center'>
            <div className='w-[30%] flex justify-center items-center'>
                <img src={ContactImg} className='w-[70%]'/>
            </div>
            <div className="flex flex-col justify-center w-[50%] gap-[1rem]">
                <h1 className='text-[#404A3C] text-[1.25rem]'>Let's work together !</h1>
                <input type="text" placeholder="Email"/>
                <textarea placeholder="Message" className='w-[100%] h-[6rem]'></textarea>
                <button className='bg-[#8BB77C] btn-contact'>Send</button>
            </div>
        </div>
    </div>
  )
}
