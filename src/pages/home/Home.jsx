import { Link } from 'react-router-dom'
import './Home.css'

function Home(){
    localStorage.setItem("x",0)
    localStorage.setItem("o",0)

    return(
        <>
        <body id='bodyHome'>
            <h1>Jogo da velha</h1>
            <Link to="/game">jogar</Link>
        </body>
        </>
    )
}
export default Home