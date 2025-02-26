import "./style.css";

export default function Header(props) {
  console.log(props)

  return (
    <header>
      <h1>{props.tittle}</h1>
    </header>
  )
}