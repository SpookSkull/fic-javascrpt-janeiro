import "./app.css";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import ImgCard from "./Components/imgcard";
import Card from "./Components/Card";
import img2 from "./assets/img2.jpg";
import img1 from "./assets/img1.jpg";
import pag1 from "./assets/pag1.jpg";



function App() {

  return (
    <>
    <div className="container">
      <Header title="logo new"/>
      
      <Banner>
        <h1>bem vindo a este site</h1>
        <p>Aqui você vai ver esse site feio /ta melhorando juro/ </p>
      </Banner>
      
      <ImgCard caption="imagem" newimg={img1}/>
      <ImgCard caption="imagem" newimg={img2}/>
      <ImgCard caption="imagem" newimg={pag1}/>
      <div>
        <Card />

      </div>


    </div>
    </>
  )
}

export default App
//.container h1, h2 {
//   font-size: 18px;
//   color: purple;
//   padding: 10px;
// }

// .form-control {
//   padding: 10px;
// }

// .form-control label {
//   font-weight: bold;
//   font-size: 14px;
//   color: brown;
// }

// .form-control input {
//   border: 2px solid brown;
//   padding: 3px;
//   outline: none;
// }

// button {
//   margin: 10px;
//   background: brown;
//   color: #fff;
//   padding: 5px;
//   cursor: pointer;
// }