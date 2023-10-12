import {BrowserRouter, Routes, Route, } from 'react-router-dom'

// Home, About Us, FAQ
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import FAQ from "./pages/FAQ"

// Header and footer
import Header from "./pages/components/Header"
import Footer from "./pages/components/Footer"

// List of all dorms
import AllDorms from "./pages/AllDorms"

// Freshman dorms
import BARHReviewPage from './pages/freshman/barh'


function App() {

  return (
    
    <div className="App">

      <BrowserRouter>
       <Header />

       <div className="pages">
        <Routes>

          <Route
          path = "/"
          element={<Home />}
          />

          <Route
          path = "/AllDorms/"
          element={<AllDorms />}
          />

          <Route
          path = "/freshman/barh"
          element = {<BARHReviewPage />}
          />

          <Route
          path = "/AboutUs/"
          element={<AboutUs />}
          />

          <Route
          path = "/FAQ/"
          element={<FAQ />}
          />

          
          
        </Routes>
       </div>

       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
