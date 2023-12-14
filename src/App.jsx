import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const[player, setPlayer] = useState("x")

  const[clickCel1, setClickCel1] = useState(false)
  const[clickCel2, setClickCel2] = useState(false)
  const[clickCel3, setClickCel3] = useState(false)
  const[clickCel4, setClickCel4] = useState(false)
  const[clickCel5, setClickCel5] = useState(false)
  const[clickCel6, setClickCel6] = useState(false)
  const[clickCel7, setClickCel7] = useState(false)
  const[clickCel8, setClickCel8] = useState(false)
  const[clickCel9, setClickCel9] = useState(false)

  const[valorCel1, setValorCel1] = useState("")
  const[valorCel2, setValorCel2] = useState("")
  const[valorCel3, setValorCel3] = useState("")
  const[valorCel4, setValorCel4] = useState("")
  const[valorCel5, setValorCel5] = useState("")
  const[valorCel6, setValorCel6] = useState("")
  const[valorCel7, setValorCel7] = useState("")
  const[valorCel8, setValorCel8] = useState("")
  const[valorCel9, setValorCel9] = useState("")

  const[resultado, setResultado]=useState("")

  const click = (valorCel, clickCel)=>{
    valorCel(player)
    setPlayer(player==="x"?"o":"x")
    clickCel(true)
  }

  useEffect(()=>{
    valorCel1 == valorCel2 && valorCel2 == valorCel3 && valorCel3 !="" ?setResultado(`ganhou ${valorCel1}`):
    valorCel4 == valorCel5 && valorCel5 == valorCel6 && valorCel6 !="" ?setResultado(`ganhou ${valorCel4}`):
    valorCel7 == valorCel8 && valorCel8 == valorCel9 && valorCel9 !="" ?setResultado(`ganhou ${valorCel7}`):
    valorCel1 == valorCel4 && valorCel4 == valorCel7 && valorCel7 !="" ?setResultado(`ganhou ${valorCel1}`):
    valorCel2 == valorCel5 && valorCel5 == valorCel8 && valorCel8 !="" ?setResultado(`ganhou ${valorCel2}`):
    valorCel3 == valorCel6 && valorCel6 == valorCel9 && valorCel9 !="" ?setResultado(`ganhou ${valorCel3}`):
    valorCel1 == valorCel5 && valorCel5 == valorCel9 && valorCel9 !="" ?setResultado(`ganhou ${valorCel1}`):
    valorCel3 == valorCel5 && valorCel5 == valorCel7 && valorCel7 !="" ?setResultado(`ganhou ${valorCel3}`):
    valorCel1 !="" && valorCel2 !="" && valorCel3 !="" &&
    valorCel4 !="" && valorCel5 !="" && valorCel6 !="" && 
    valorCel7 !="" && valorCel8 !="" && valorCel9 !="" ? setResultado("empate"):{}
    

  },[clickCel1, clickCel2, clickCel3, clickCel4, clickCel5, clickCel6, clickCel7, clickCel8, clickCel9])
  


  return (
    <> 
    <body id='bodyApp'>
      {resultado?
      <h1>{resultado}</h1>:
      <h1>vez de: {player}</h1>}
      <div className='game'>
        <button onClick={clickCel1 ? ()=>{} :(e)=>{click(setValorCel1,setClickCel1)}}>{valorCel1}</button>
        <button onClick={clickCel2 ? ()=>{} :(e)=>{click(setValorCel2,setClickCel2)}}>{valorCel2}</button>
        <button onClick={clickCel3 ? ()=>{} :(e)=>{click(setValorCel3,setClickCel3)}}>{valorCel3}</button>
        <button onClick={clickCel4 ? ()=>{} :(e)=>{click(setValorCel4,setClickCel4)}}>{valorCel4}</button>
        <button onClick={clickCel5 ? ()=>{} :(e)=>{click(setValorCel5,setClickCel5)}}>{valorCel5}</button>
        <button onClick={clickCel6 ? ()=>{} :(e)=>{click(setValorCel6,setClickCel6)}}>{valorCel6}</button>
        <button onClick={clickCel7 ? ()=>{} :(e)=>{click(setValorCel7,setClickCel7)}}>{valorCel7}</button>
        <button onClick={clickCel8 ? ()=>{} :(e)=>{click(setValorCel8,setClickCel8)}}>{valorCel8}</button>
        <button onClick={clickCel9 ? ()=>{} :(e)=>{click(setValorCel9,setClickCel9)}}>{valorCel9}</button>
      </div> 
      
      <button onClick={()=>{window.location.reload()}}>reset</button>
    </body>
    </>

  )
}

export default App
