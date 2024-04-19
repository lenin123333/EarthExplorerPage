import './App.css'
import Asaide from './componets/Asaide'
import Comments from './componets/Comments'
import Estadisticas from './componets/Estadisticas'
import Footer from './componets/Footer'
import Header from './componets/Header'
import Main from './componets/Main'

function App() {
 
  return (
    <>
       <Header />
       <Main/>
       <Estadisticas/>
       <Asaide/>
       <Comments/>
       <Footer/>
    </>
  )
}

export default App
