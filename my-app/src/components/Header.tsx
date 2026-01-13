import {CircleChevronRight, CircleChevronLeft} from "lucide-react"
function Header() {
  return (
    <div className="px-8 w-full">

      <h1 className="text-gray-400 font-medium">
        ELEVATE YOUR GAME</h1>

        <div className="flex items-center w-full relative">
        <h1 className="text-wrap font-medium text-[70px] w-1/2">Comprehensive Tennis Training for Everyone  </h1>
        <p className="flex  gap-4  absolute bottom-0 right-0 pr-8">
        <CircleChevronLeft className="text-gray-100 bg-black rounded-full size-8"/>  
        <CircleChevronRight className="text-gray-100 bg-black rounded-full size-8"/>
        </p>
        </div>
    </div>
  )
}

export default Header