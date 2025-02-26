import "./app.css";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import ImgCard from "./Components/imgcard";


function App() {

  return (
    <>
    <div className="container">
      <Header title="logo new"/>
      
      <Banner>
        <h1>bem vindo a este site</h1>
        <p>Aqui você vai ver esse site feio </p>
      </Banner>
      
      <ImgCard caption="imagem"/>


    </div>
    </>
  )
}

export default App
