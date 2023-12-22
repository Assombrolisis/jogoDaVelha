import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Game.css'

function Game() {
  const navegate  = useNavigate()
  const pontosPlayer1 = parseInt(localStorage.getItem("X"))
  const pontosPlayer2 = parseInt(localStorage.getItem("O"))
  
  const[player, setPlayer] = useState("X")

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

  const click = (setValorCel, valorCel)=>{
    if(vitoria){return null}
    if(valorCel !==""){return null}
    setValorCel(player)
    setPlayer(player==="X"?"O":"X")
    
  }

  const ganhou =(valorCel)=>{
    setVitoria(true)
    setResultado(`Jogador ${valorCel} ganhou`)
    let pontosAtuais = parseInt(localStorage.getItem(valorCel))
    localStorage.setItem(valorCel,pontosAtuais+1)

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
    localStorage.setItem("X",0)
    localStorage.setItem("O",0)
    window.location.reload()
  }


  return (
    <> 
    <body id='bodyGame'>

      <header>
        <div className='containerVoltar'>
          <button id='voltar' className='opcao' onClick={()=>{navegate('/')}}>Voltar</button>
        </div>
        <picture id='picture_game'>
                <img src="src\img\logo.png" alt="Logo" />
        </picture>
        <div className='containerReset'>
            <button className="opcao" onClick={()=>{window.location.reload()}}>Recomeçar</button> 
            <button className="opcao" onClick={zerarPlacar}>Zerar placar</button>
        </div>
      </header>

      <div className='outerContainer'>

        <div className='pontuacao'>
          <h2>Jogador <span id='playerX'>X</span>:</h2>
          <span className='pontos'>{pontosPlayer1} <h2>pts</h2></span> 
        </div>

        <div className='containerGame'>
          
          {resultado?
          <span className='resultado'>{resultado}</span>:
          <span className='rodada'>Vez do jogador {player}</span>}

          <div className='game'>
            <button className={`game_button ${valorCel1}`} onClick={(e)=>{click(setValorCel1,valorCel1)}}>{valorCel1}</button>
            <button className={`game_button ${valorCel2}`} onClick={(e)=>{click(setValorCel2,valorCel2)}}>{valorCel2}</button>
            <button className={`game_button ${valorCel3}`} onClick={(e)=>{click(setValorCel3,valorCel3)}}>{valorCel3}</button>
            <button className={`game_button ${valorCel4}`} onClick={(e)=>{click(setValorCel4,valorCel4)}}>{valorCel4}</button>
            <button className={`game_button ${valorCel5}`} onClick={(e)=>{click(setValorCel5,valorCel5)}}>{valorCel5}</button>
            <button className={`game_button ${valorCel6}`} onClick={(e)=>{click(setValorCel6,valorCel6)}}>{valorCel6}</button>
            <button className={`game_button ${valorCel7}`} onClick={(e)=>{click(setValorCel7,valorCel7)}}>{valorCel7}</button>
            <button className={`game_button ${valorCel8}`} onClick={(e)=>{click(setValorCel8,valorCel8)}}>{valorCel8}</button>
            <button className={`game_button ${valorCel9}`} onClick={(e)=>{click(setValorCel9,valorCel9)}}>{valorCel9}</button>
          </div> 
          
        </div>

        <div className='pontuacao'>
          <h2>Jogador <span id='playerO'>O</span>:</h2>
          <span className="pontos">{pontosPlayer2}<h2>pts</h2></span>
        </div>

      </div>
    </body>
    </>

  )
}

export default Game
