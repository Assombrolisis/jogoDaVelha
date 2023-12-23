import { BrowserRouter, Route, Routes } from "react-router-dom"
import Game from "./pages/2 Players/Game"
import SinglePlayer from "./pages/Single Player/SinglePlayer"
import Home from "./pages/home/Home"


function AppRoutes(){

    return(
       <BrowserRouter>
            <Routes>
                <Route path="/game" element={<Game />}></Route>
                <Route path="/SinglePlayer" element={<SinglePlayer />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
       </BrowserRouter>
    )
}
export default AppRoutes