import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Game.css'

function Game() {
  const navegate  = useNavigate()
  const pontosPlayer1 = parseInt(localStorage.getItem("x"))
  const pontosPlayer2 = parseInt(localStorage.getItem("o"))
  
  const[player, setPlayer] = useState("x")

  const[valorCel1, setValorCel1] = useState("")
  const[valorCel2, setValorCel2] = useState("")
  const[valorCel3, setValorCel3] = useState("")
  const[valorCel4, setValorCel4] = useState("")
  const[valorCel5, setValorCel5] = useState("")
  const[valorCel6, setValorCel6] = useState("")
  const[valorCel7, setValorCel7] = useState("")
  const[valorCel8, setValorCel8] = useState("")
  const[valorCel9, setValorCel9] = useState("")

  const[vitoria, setVitoria] = useState(false)
  
  const[resultado, setResultado]=useState("")

  const click = (setValorCel, valor)=>{
    if(vitoria){return}
    if(valor !==""){return}
    setValorCel(player)
    setPlayer(player==="x"?"o":"x")
    
  }

  const ganhou =(valor)=>{
    setVitoria(true)
    setResultado(`Jogador ${valor} ganhou`)
    let pontosAtuais = parseInt(localStorage.getItem(valor))
    localStorage.setItem(valor,pontosAtuais+1)

  }


useEffect(()=>{
  valorCel1 == valorCel2 && valorCel2 == valorCel3 && valorCel3 !="" ?ganhou(valorCel1): 
  valorCel4 == valorCel5 && valorCel5 == valorCel6 && valorCel6 !="" ?ganhou(valorCel4):
  valorCel7 == valorCel8 && valorCel8 == valorCel9 && valorCel9 !="" ?ganhou(valorCel7):

  valorCel1 == valorCel4 && valorCel4 == valorCel7 && valorCel7 !="" ?ganhou(valorCel1):
  valorCel2 == valorCel5 && valorCel5 == valorCel8 && valorCel8 !="" ?ganhou(valorCel2):
  valorCel3 == valorCel6 && valorCel6 == valorCel9 && valorCel9 !="" ?ganhou(valorCel3):

  valorCel3 == valorCel5 && valorCel5 == valorCel7 && valorCel7 !="" ?ganhou(valorCel3):
  valorCel1 == valorCel5 && valorCel5 == valorCel9 && valorCel9 !="" ?ganhou(valorCel1):


  valorCel1 !="" && valorCel2 !="" && valorCel3 !="" &&
  valorCel4 !="" && valorCel5 !="" && valorCel6 !="" && 
  valorCel7 !="" && valorCel8 !="" && valorCel9 !="" ? setResultado("Empate"):{}
},[valorCel1, valorCel2, valorCel3, valorCel4, valorCel5, valorCel6, valorCel7, valorCel8, valorCel9])

  const zerarPlacar = ()=>{
    localStorage.setItem("x",0)
    localStorage.setItem("o",0)
    window.location.reload()
  }


  return (
    <> 
    <body id='bodyGame'>
      
      <div>
        <h1>Jogador x : <span className="pontos">{pontosPlayer1}</span> pts</h1>
      </div>
      <div className='containerGame'>
      <button className="opcao" onClick={()=>{navegate('/')}}>Voltar</button>

        {resultado?
        <h3>{resultado}</h3>:
        <h2>Vez do jogador {player}</h2>}
        <div className='game'>
          <button className="game_button" onClick={(e)=>{click(setValorCel1,valorCel1)}}>{valorCel1}</button>
          <button className="game_button" onClick={(e)=>{click(setValorCel2,valorCel2)}}>{valorCel2}</button>
          <button className="game_button" onClick={(e)=>{click(setValorCel3,valorCel3)}}>{valorCel3}</button>
          <button className="game_button" onClick={(e)=>{click(setValorCel4,valorCel4)}}>{valorCel4}</button>
          <button className="game_button" onClick={(e)=>{click(setValorCel5,valorCel5)}}>{valorCel5}</button>
          <button className="game_button" onClick={(e)=>{click(setValorCel6,valorCel6)}}>{valorCel6}</button>
          <button className="game_button" onClick={(e)=>{click(setValorCel7,valorCel7)}}>{valorCel7}</button>
          <button className="game_button" onClick={(e)=>{click(setValorCel8,valorCel8)}}>{valorCel8}</button>
          <button className="game_button" onClick={(e)=>{click(setValorCel9,valorCel9)}}>{valorCel9}</button>
        </div> 
        <div className='containerReset'>
          <button className="opcao" onClick={()=>{window.location.reload()}}>Recomeçar</button> 
          <button className="opcao" onClick={zerarPlacar}>Zerar placar</button>
        </div>
      </div>
      <div>
        <h1>Jogador o : <span className="pontos">{pontosPlayer2}</span> pts</h1>
      </div>
    </body>
    </>

  )
}

export default Game
