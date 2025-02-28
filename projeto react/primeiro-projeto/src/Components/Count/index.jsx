import "./style.css"


export default function Count() {
    const [count, setCount] = usestate(0);

// função para aumentar o estado
    const aumentar = () => {
        setCount(count + 1);
    }
    const diminuir = () => {
        setCount(count - 1)
    }

  return (
    <div className="container" >
        <h1>{count}</h1>
        <button onClick={aumentar} style={{marginRight: '10px'}}>aumentar</button>
        <button onclick={diminuir} style={{marginLeft: '10px'}}>diminuir</button>
    </div>
  )
}
s