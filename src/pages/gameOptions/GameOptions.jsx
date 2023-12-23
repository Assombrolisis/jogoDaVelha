import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GameOptions.css";

function GameOptions() {
  const navegate = useNavigate();
  const [player, setPlayer] = useState("X");

  return (
    <>
      <body id="bodyOptions">
        <h1>Quem será o primeiro a jogar?</h1>
        <h2>{player} irá começar</h2>
        <div className="opcoes">
          <button
            id="btn_jogar"
            onClick={() => {
              setPlayer("X");
              localStorage.setItem("player", player);
            }}
          >
            X
          </button>
          <button
            id="btn_opc"
            onClick={() => {
              setPlayer("O");
              localStorage.setItem("player", player);
            }}
          >
            O
          </button>
        </div>

        <button id="btn_jogar"
          onClick={() => {
            localStorage.setItem("player", player);
            navegate("/Game");
          }}
        >
          Jogar
        </button>
      </body>
    </>
  );
}

export default GameOptions;
