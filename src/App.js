import StartPage from "./StartPage/StartPage";
import DoggoHome from "./DoggoHome/DoggoHome";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<StartPage />} />
      <Route path = "/play" element ={<DoggoHome />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
