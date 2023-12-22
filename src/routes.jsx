import { BrowserRouter, Route, Routes } from "react-router-dom"
import Game from "./pages/game/2 Players/Game"
import Home from "./pages/Home/Home"


function AppRoutes(){

    return(
       <BrowserRouter>
            <Routes>
                <Route path="/game" element={<Game />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
       </BrowserRouter>
    )
}
export default AppRoutes