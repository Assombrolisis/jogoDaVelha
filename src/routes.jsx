import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./pages/2 Players/Game";
import Home from "./pages/Home/Home";
import GameOptions from "./pages/gameOptions/gameOptions";
import SinglePlayer from "./pages/Single Player/SinglePlayer"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gameOptions" element={<GameOptions />}></Route>
        <Route path="/SinglePlayer" element={<SinglePlayer />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
