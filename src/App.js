import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import Details from "./page/Details";
import { Navaar } from "./component/nav";
import Wishlist from "./page/Wishlist";
import "./App.css";
import House from "./page/house";
import { HouseContextProvider } from "./page/Housecontext";
import DetailsComponent from "./page/DetailsComponent";
import Welcome from "./component/welcome";
import Insurance from "./page/insurance";
import Index from './page/index'
import Footer from './page/footer'
import { Cartpage } from "./page/Cart";

function App() {
    return (
        <div className="App">
            <HouseContextProvider>
                <Router>
                    <Navaar /> {/* Navaar is displayed on all pages */}
                    <Welcome />
                    <Routes>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/house" element={<House />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/Cart" element={<Cartpage />} />
                        <Route path="/" element={<Index />} />
                        <Route path="/Details/:id" element={<Details />} />
                        <Route path="/insurance" element={<Insurance />} />
                        <Route path="/details/:id" element={<DetailsComponent />} />
                    </Routes>
                    <Footer /> {/* Footer is displayed on all pages */}
                </Router>
            </HouseContextProvider>
        </div>
    )
}

export default App; 
