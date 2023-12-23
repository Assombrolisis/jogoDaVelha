import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIos, MdRefresh } from "react-icons/md";
import './Game.css'

function Game() {
  const navegate  = useNavigate()
  const pontosPlayer1 = parseInt(localStorage.getItem("X"))
  const pontosPlayer2 = parseInt(localStorage.getItem("O"))
  
  const[player, setPlayer] = useState(localStorage.getItem("player"))

  const[valorCel1, setValorCel1] = useState("")
  const[valorCel2, setValorCel2] = useState("")
  const[valorCel3, setValorCel3] = useState("")
  const[valorCel4, setValorCel4] = useState("")
  const[valorCel5, setValorCel5] = useState("")
  const[valorCel6, setValorCel6] = useState("")
  const[valorCel7, setValorCel7] = useState("")
  const[valorCel8, setValorCel8] = useState("")
  const[valorCel9, setValorCel9] = useState("")

  const[ganhou1, setGanhou1] = useState("")
  const[ganhou2, setGanhou2] = useState("")
  const[ganhou3, setGanhou3] = useState("")
  const[ganhou4, setGanhou4] = useState("")
  const[ganhou5, setGanhou5] = useState("")
  const[ganhou6, setGanhou6] = useState("")
  const[ganhou7, setGanhou7] = useState("")
  const[ganhou8, setGanhou8] = useState("")
  const[ganhou9, setGanhou9] = useState("")

  const[vitoria, setVitoria] = useState(false)

  const[resultado, setResultado]=useState("")

  const click = (setValorCel, valorCel)=>{
    if(vitoria){return null}
    if(valorCel !==""){return null}
    setValorCel(player)
    setPlayer(player==="X"?"O":"X")
    
  }

  const ganhou =(valorCel, pos)=>{
    setVitoria(true)
    setResultado(`Jogador ${valorCel} ganhou!`)
    if(pos == 1){
      setGanhou1("Ganhou")
      setGanhou2("Ganhou")
      setGanhou3("Ganhou")
    } else if(pos == 2){
      setGanhou4("Ganhou")
      setGanhou5("Ganhou")
      setGanhou6("Ganhou")
    } else if(pos == 3){
      setGanhou7("Ganhou")
      setGanhou8("Ganhou")
      setGanhou9("Ganhou")
    } else if(pos == 4){
      setGanhou1("Ganhou")
      setGanhou4("Ganhou")
      setGanhou7("Ganhou")
    } else if(pos == 5){
      setGanhou2("Ganhou")
      setGanhou5("Ganhou")
      setGanhou8("Ganhou")
    } else if(pos == 6){
      setGanhou3("Ganhou")
      setGanhou6("Ganhou")
      setGanhou9("Ganhou")
    } else if(pos == 7){
      setGanhou3("Ganhou")
      setGanhou5("Ganhou")
      setGanhou7("Ganhou")
    } else if(pos == 8){
      setGanhou1("Ganhou")
      setGanhou5("Ganhou")
      setGanhou9("Ganhou")
    } 
    let pontosAtuais = parseInt(localStorage.getItem(valorCel))
    localStorage.setItem(valorCel,pontosAtuais+1)

  }


useEffect(()=>{
  valorCel1 == valorCel2 && valorCel2 == valorCel3 && valorCel3 !="" ?ganhou(valorCel1, 1): //vitoria linha 1
  valorCel4 == valorCel5 && valorCel5 == valorCel6 && valorCel6 !="" ?ganhou(valorCel4, 2): //vitoria linha 2
  valorCel7 == valorCel8 && valorCel8 == valorCel9 && valorCel9 !="" ?ganhou(valorCel7, 3): //vitoria linha 3

  valorCel1 == valorCel4 && valorCel4 == valorCel7 && valorCel7 !="" ?ganhou(valorCel1, 4): //vitoria coluna 1
  valorCel2 == valorCel5 && valorCel5 == valorCel8 && valorCel8 !="" ?ganhou(valorCel2, 5): //vitoria coluna 2
  valorCel3 == valorCel6 && valorCel6 == valorCel9 && valorCel9 !="" ?ganhou(valorCel3, 6): //vitoria coluna 3

  valorCel3 == valorCel5 && valorCel5 == valorCel7 && valorCel7 !="" ?ganhou(valorCel3, 7): //vitoria diagonal secundaria
  valorCel1 == valorCel5 && valorCel5 == valorCel9 && valorCel9 !="" ?ganhou(valorCel1, 8): //vitoria diagonal principal


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
          <button id='voltar' className='opcao' onClick={()=>{navegate('/')}}><MdArrowBackIos /><span>Voltar</span></button>
        </div>
        {/* <picture id='picture_game'>
                <img src="src\img\logo.png" alt="Logo" />
        </picture> */}
        {resultado?
          <span className='resultado'>{resultado}</span>:
          <div className='containerRodada'>
            <span>Vez do jogador:</span> 
            <div className='rodada'>
              <div className={`boxX ${player!=="X" && "inativo"}`}>X<span className='placarSuperior' > - {pontosPlayer1}</span></div>
              <span className='divisionLine'>|</span>
              <div className={`boxO ${player==="X" && "inativo"}`}>O<span className='placarSuperior'> - {pontosPlayer2}</span></div>
              {/* {player} */}
            </div>
          </div>}

        <div className='containerReset'>
            <button className="opcao" onClick={()=>{window.location.reload()}}><MdRefresh /><span>Recomeçar</span></button> 
            <button className="opcao" onClick={zerarPlacar}><div id='zerar'>0</div><span>Zerar placar</span></button>
        </div>
      </header>

      <div className='outerContainer'>

        <div className='pontuacao'>
          <h2>{localStorage.getItem("player1")}</h2>
          <span className='pontos'>{pontosPlayer1} <h2>pts</h2></span> 
        </div>

        <div className='containerGame'>

          <div className='game'>
            <button className={`game_button ${valorCel1} ${ganhou1}`} onClick={(e)=>{click(setValorCel1,valorCel1)}}>{valorCel1}</button>
            <button className={`game_button ${valorCel2} ${ganhou2}`} onClick={(e)=>{click(setValorCel2,valorCel2)}}>{valorCel2}</button>
            <button className={`game_button ${valorCel3} ${ganhou3}`} onClick={(e)=>{click(setValorCel3,valorCel3)}}>{valorCel3}</button>
            <button className={`game_button ${valorCel4} ${ganhou4}`} onClick={(e)=>{click(setValorCel4,valorCel4)}}>{valorCel4}</button>
            <button className={`game_button ${valorCel5} ${ganhou5}`} onClick={(e)=>{click(setValorCel5,valorCel5)}}>{valorCel5}</button>
            <button className={`game_button ${valorCel6} ${ganhou6}`} onClick={(e)=>{click(setValorCel6,valorCel6)}}>{valorCel6}</button>
            <button className={`game_button ${valorCel7} ${ganhou7}`} onClick={(e)=>{click(setValorCel7,valorCel7)}}>{valorCel7}</button>
            <button className={`game_button ${valorCel8} ${ganhou8}`} onClick={(e)=>{click(setValorCel8,valorCel8)}}>{valorCel8}</button>
            <button className={`game_button ${valorCel9} ${ganhou9}`} onClick={(e)=>{click(setValorCel9,valorCel9)}}>{valorCel9}</button>
          </div>
          
        </div>

        <div className='pontuacao'>
          <h2>{localStorage.getItem("player2")}</h2>
          <span className="pontos">{pontosPlayer2}<h2>pts</h2></span>
        </div>

      </div>
    </body>
    </>

  )
}

export default Game
