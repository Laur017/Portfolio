import LeftBtns from '../assets/btns.png'

type Pages = 1 | 2 | 3 | 4;

interface Props {
  handlePage : (n:Pages) => void,
  page : Pages
}
export default function Navbar({handlePage, page}:Props) {

  const handleClick = (n:Pages) => {
    handlePage(n)
  }

  return (
    <div className='flex justify-between p-5 border w-[80%] rounded-t-lg'>
        <img src={LeftBtns} className='w-20'/>
        <div className='flex justify-evenly w-[50%]'>
          <button className={`${page === 1 ? 'text-[#8BB77C]' : 'text-[#F4FCF1]'}`} onClick={()=>handleClick(1)}>Home</button>
          <button className={`${page === 2 ? 'text-[#8BB77C]' : 'text-[#F4FCF1]'}`} onClick={()=>handleClick(2)}>About</button>
          <button className={`${page === 3 ? 'text-[#8BB77C]' : 'text-[#F4FCF1]'}`} onClick={()=>handleClick(3)}>Work</button>
          <button className={`${page === 4 ? 'text-[#8BB77C]' : 'text-[#F4FCF1]'}`} onClick={()=>handleClick(4)}>Contact</button>
        </div>
    </div>
  )
}
