import './Work.css'
import { useNavigate } from 'react-router-dom'

interface PropsTypes {
    name:string,
    link:string
}

export default function WorkCard({name,link}:PropsTypes) {
    const navigate = useNavigate()
  return (
    <div className='w-[70%] h-[10rem] work-card' onClick={()=>navigate(link)}>
        <p>{name}</p>
    </div>
  )
}
