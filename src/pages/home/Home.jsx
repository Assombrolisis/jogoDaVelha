import { Link, useNavigate } from 'react-router-dom'
import './Home.css'

function Home(){
    const navegate = useNavigate()
    localStorage.setItem("x",0)
    localStorage.setItem("o",0)

    return(
        <>
        <body id='bodyHome'>
            <picture>
                <img src="src\img\logo.png" alt="Logo" />
            </picture>
            <button id="btn_jogar" onClick={()=>{navegate('/game')}}>JOGAR</button>
        </body>
        </>
    )
}
export default Home