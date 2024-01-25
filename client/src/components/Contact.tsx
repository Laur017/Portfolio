import ContactImg from '../assets/contact.png'

export default function Contact() {
  return (
    <div className="border w-[80%] h-[80%] rounded-b-lg flex justify-center items-center">
        <div className='bg-[#F4FCF1] w-[90%] h-[50%] flex items-center rounded-[0.5rem] justify-center'>
            <div className='w-[30%] flex justify-center items-center'>
                <img src={ContactImg} className='w-[70%]'/>
            </div>
            <div className="flex flex-col justify-center w-[50%] gap-[1rem]">
                <h1 className='text-[#404A3C]'>Let's work together !</h1>
                <input type="text" placeholder="Email"/>
                <textarea placeholder="Message" className='w-[100%] h-[6rem]'></textarea>
                <button className='bg-[#8BB77C] btn-contact'>Send</button>
            </div>
        </div>
    </div>
  )
}
