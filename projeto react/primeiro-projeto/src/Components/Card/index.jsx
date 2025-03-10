import "./style.css"

export default function index() {
    const lista = [
        {
          nome: "Projeto novo",
          responsavel: "Fernando Carlos",
          valor: 1200
        },
        {
          nome: "Projeto do Mar",
          responsavel: "Fonseca",
          valor: 4000
        },
        {
          nome: "Giovanni",
          responsavel: "Pedro",
          valor: 2000
        },
        {
          nome: "Fernanda",
          responsavel: "Pedro",
          valor: 990
        },
      {
        nome: "bangu",
        responsavel: "carlão",
        valor: 888
      },
       {
        nome: "jazz",
        responsavel: "senor",
        valor: 900
      }
    ]

      console.log(lista);

  return (
    <div className="Card-container">
        {lista.map((item, index) => {
            <div className="card" key={index}>
            <h2>{item.nome}</h2>
                <p>{item.responsavel}</p>
            <strong>{item.valor} </strong>
        </div>
        } )}
        
    </div>
  )
}
