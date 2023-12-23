import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

function Home() {
  const navegate = useNavigate();
  localStorage.setItem("X", 0);
  localStorage.setItem("O", 0);

  const [player1, setPlayer1] = useState("Player X");
  const [player2, setPlayer2] = useState("Player O");

  const handleInputChange1 = (e) => {
    setPlayer1(e.target.value);
    localStorage.setItem("player1", player1);
  };
  const handleInputChange2 = (e) => {
    setPlayer2(e.target.value);
    localStorage.setItem("player2", player2);
  };

  return (
    <>
      <body id="bodyHome">
        <picture id="picture_home">
          <img src="src\img\logo.png" alt="Logo" />
        </picture>
        <div className="players">
          <h4>Escolha seu nome:</h4>
          <p>
            <input
              type="text"
              placeholder="Player X"
              value={player1}
              onChange={handleInputChange1}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Player 0"
              value={player2}
              onChange={handleInputChange2}
            />
          </p>
        </div>

        <button
          id="btn_jogar_mp" className="multiplayer"
          onClick={() => {
            localStorage.setItem("player1", player1);
            localStorage.setItem("player2", player2);
            navegate("/gameOptions");
          }}
        >
          2 jogadores
        </button>

        <button
          id="btn_jogar_sp" className="singleplayer"
          onClick={() => {
            localStorage.setItem("player1", player1);
            localStorage.setItem("player2", player2);
            navegate("/singlePlayer");
          }}
        >
          1 jogador
        </button>
      </body>
    </>
  );
}
export default Home;
