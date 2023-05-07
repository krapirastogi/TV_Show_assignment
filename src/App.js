import {Routes,Route } from "react-router-dom";
import './App.css';
import ShowList from "./components/ShowList";
import ShowDetails from './components/ShowDetails';

function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<ShowList/>} />
    <Route path="/show/:id" element={<ShowDetails/>} />
    </Routes>
    </>
  );
}

export default App;
