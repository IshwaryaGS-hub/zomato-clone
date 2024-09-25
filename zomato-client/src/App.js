import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Filter from "./components/Filter/Filter";
import Details from "./components/Details/Details";
import Checkout from "./components/Checkout/Checkout";

function App() {
  // const [isHome, setIsHome] = useState(true);
  return (
    <>
      {/* Header */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/filter" element={<Filter />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      {/* Home */}
      {/* Filter */}
      {/* Details */}
      {/* Checkout */}
    </>
  );
}

export default App;
