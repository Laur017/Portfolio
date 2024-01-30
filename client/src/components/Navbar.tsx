import {useNavigate } from 'react-router-dom';
import LeftBtns from '../assets/btns.png'

type Pages = 1 | 2 | 3 | 4;

interface Props {
  handlePage : (n:Pages) => void,
  page : Pages
}
export default function Navbar({handlePage, page}:Props) {
  const navigate = useNavigate();

  const handleClick = (n:Pages) => {
    handlePage(n)
    n === 1 ?
    navigate('/'):
    n === 2 ?
    navigate('/about'):
    n === 3 ?
    navigate('/work'):
    navigate('/contact')
  }

  return (
    <nav className='flex justify-between items-center p-5 border w-[100%] rounded-t-lg navigation'>
        <img src={LeftBtns} className='w-16 h-6'/>
        <div className='flex justify-evenly w-[50%] gap-[1rem]'>
          <button className={`${page === 1 ? 'text-[#8BB77C]' : 'text-[#F4FCF1] hover:text-[#5dbb63]'} tracking-[1px] mb-2`} onClick={()=>handleClick(1)}>Home</button>
          <button className={`${page === 2 ? 'text-[#8BB77C]' : 'text-[#F4FCF1] hover:text-[#5dbb63]'} tracking-[1px] mb-2`} onClick={()=>handleClick(2)}>About</button>
          <button className={`${page === 3 ? 'text-[#8BB77C]' : 'text-[#F4FCF1] hover:text-[#5dbb63]'} tracking-[1px] mb-2`} onClick={()=>handleClick(3)}>Work</button>
          <button className={`${page === 4 ? 'text-[#8BB77C]' : 'text-[#F4FCF1] hover:text-[#5dbb63]'} tracking-[1px] mb-2`} onClick={()=>handleClick(4)}>Contact</button>
        </div>
    </nav>
  )
}
