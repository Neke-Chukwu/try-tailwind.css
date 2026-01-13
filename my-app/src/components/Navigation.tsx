import { Clock, Menu, ChevronRight} from "lucide-react"

function Navigation() {
  return (
    <div className="flex w-full">
        <section className="flex items-center w-1/2 gap-8 m-4 p-4 ">

            <img src="https://images.unsplash.com/vector-1739805925414-cf3baa384c5d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-8 h-8"/>
            
            <ul className="flex items-center gap-4 bg-[#f4f4f4ff] rounded-3xl py-3 px-4 text-[10px] font-bold">
                <li>Home</li>
                <li>About Us</li>
                <li>Programs</li>
                <li>Coaches</li>
            </ul>
        </section> 

        <section className="flex items-center justify-end w-1/2 gap-8 m-4 pl-8 p-4">
            <ul className="flex items-center gap-8">
                <li className="bg-[#f4f4f4ff] flex items-center gap-2 rounded-3xl py-3 px-4 text-[10px] font-bold">
                    Contact Us
                    <ChevronRight className="size-3"/>
                </li>
            <li className="bg-[#f4f4f4ff] rounded-3xl py-2 px-5 ">
            <Clock className=""/>
            </li>
            <li className="bg-[#f4f4f4ff] rounded-3xl py-2 px-5">
            <Menu className=""/>
            </li>
            </ul>
        </section>
    </div>
)
}

export default Navigation