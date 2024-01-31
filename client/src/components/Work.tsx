import WorkCard from "./Work/WorkCard";

export default function Work() {
  return (
    <div className="w-[80%] h-[80%] flex justify-center items-center">
        <WorkCard name={'To do App'} link={'/todo'}/>
    </div>
  )
}
