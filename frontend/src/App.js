import {BrowserRouter, Routes, Route, } from 'react-router-dom'

// Header and footer
import Header from "./pages/components/Header"
import Footer from "./pages/components/Footer"

// Stuff in header
// Home
import Home from "./pages/Home"

// List of all dorms
import AllDorms from "./pages/AllDorms"

// Freshman dorms
import Barh from './pages/freshman/barh'
import Barton from './pages/freshman/barton'
import Bray from './pages/freshman/bray'
import Cary from './pages/freshman/cary'
import Crockett from './pages/freshman/crockett'
import Davidson from './pages/freshman/davidson'
import Hall from './pages/freshman/hall'
import Nason from './pages/freshman/nason'
import Nugent from './pages/freshman/nugent'
import Sharp from './pages/freshman/sharp'
import Warren from './pages/freshman/warren'

// Sophomore dorms
import Blitman from './pages/sophomore/blitman'
import Bryckwyck from './pages/sophomore/bryckwyck'
import Colonie from './pages/sophomore/colonie'
import EComplex from './pages/sophomore/ecomplex'
import North from './pages/sophomore/north'
import Quad from './pages/sophomore/quad'
import RahpA from './pages/sophomore/rahpa'
import RahpB from './pages/sophomore/rahpb'

// Upperclass dorms
import CityStationWest from './pages/upperclass/citystationwest'
import Polytechnic from './pages/upperclass/polytechnic'

// Stuff in footer
// About Us and FAQ
import AboutUs from "./pages/AboutUs"
import FAQ from "./pages/FAQ"


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
          element = {<Barh />}
          />
          <Route
          path = "/freshman/barton"
          element= {<Barton />}
          />
          <Route
          path = "/freshman/bray"
          element= {<Bray />}
          />
          <Route
          path = "/freshman/cary"
          element= {<Cary />}
          />
          <Route
          path = "/freshman/crockett"
          element= {<Crockett />}
          />
          <Route
          path = "/freshman/davidson"
          element= {<Davidson />}
          />
          <Route
          path = "/freshman/hall"
          element= {<Hall />}
          />
          <Route
          path = "/freshman/nason"
          element= {<Nason />}
          />
          <Route
          path = "/freshman/nugent"
          element= {<Nugent />}
          />
          <Route
          path = "/freshman/sharp"
          element= {<Sharp />}
          />
          <Route
          path = "/freshman/warren"
          element= {<Warren />}
          />

          <Route
          path = "/sophomore/blitman"
          element= {<Blitman />}
          />
          <Route
          path = "/sophomore/bryckwyck"
          element= {<Bryckwyck />}
          />
          <Route
          path = "/sophomore/colonie"
          element= {<Colonie />}
          />
          <Route
          path = "/sophomore/ecomplex"
          element= {<EComplex />}
          />
          <Route
          path = "/sophomore/north"
          element= {<North />}
          />
          <Route
          path = "/sophomore/quad"
          element= {<Quad />}
          />
          <Route
          path = "/sophomore/rahpa"
          element= {<RahpA />}
          />
          <Route
          path = "/sophomore/rahpb"
          element= {<RahpB />}
          />

          <Route
          path = "/upperclass/citystationwest"
          element= {<CityStationWest />}
          />
          <Route
          path = "/upperclass/polytechnic"
          element= {<Polytechnic />}
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
