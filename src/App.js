import { Route, Routes } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import Room from "./Pages/Room/Room";
import Main from "./Pages/Rooms";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Services from "./Pages/Services";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index={true} element={<MainPage />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="rooms">
          <Route path="" element={<Main />} />
          <Route path="room" element={<Room />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
