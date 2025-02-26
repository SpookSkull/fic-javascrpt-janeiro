import "./app.css";
import Banner from "./Components/Banner";
import Header from "./Components/Header";


function App() {

  return (
    <>
    <div className="container">
      <Header title="logo new"/>
      <Header title="react dificil"/>
      
      <Banner>
        <h1>bem vindo a este site</h1>
        <p>Aqui você vai ver esse site feio </p>
      </Banner>
      <h1>seja bem vindo</h1>


    </div>
    </>
  )
}

export default App
