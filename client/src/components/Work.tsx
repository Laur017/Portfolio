import WorkCard from "./Work/WorkCard";

export default function Work() {
  return (
    <div className="w-[80%] h-[80%] flex justify-center items-center flex-col gap-[1rem]">
        <WorkCard name={'To do App'} link={'/todo'}/>
        <WorkCard name={'Weather Forecast'} link={'/weather'} /> 
    </div>
  )
}
