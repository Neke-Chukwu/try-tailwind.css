import CardDetails from "../components/CardDetails"
import Header from "../components/Header"
import Navigation from "../components/Navigation"

function Home() {
  return (
    <div className="container mx-auto flex-1">
        <Navigation/>
        <Header/>
        <CardDetails/>
    </div>
  )
}

export default Home