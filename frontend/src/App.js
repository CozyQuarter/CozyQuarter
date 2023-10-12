import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import FAQ from "./pages/FAQ"
import Header from "./pages/components/Header"
import Footer from "./pages/components/Footer"
import BARHReviewPage from './pages/freshman/barh'

function App() {

  return (
    
    <div className="App">

      <BrowserRouter>
       <Header />

       <div className="pages">
        <Routes>

          <Route
          path = "/freshman/barh"
          element = {<BARHReviewPage />}
          />

          <Route
          path = "/"
          element={<Home />}
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
