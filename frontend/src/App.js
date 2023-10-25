import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './pages/components/Header';
import Footer from './pages/components/Footer';
import Signup from './pages/components/auth/Signup';
import Signin from './pages/components/auth/Signin';
import Dashboard from './pages/components/auth/Dashboard';
import LandingPage from './pages/components/auth/LandingPage/LandingPage';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import ProfilePage from './pages/components/auth/ProfilePage';

// List of all dorms
import AllDorms from "./pages/AllDorms"

// Freshman dorms
import Barh from './pages/freshman/barh'
import Barton from './pages/freshman/barton'
import Bray from './pages/freshman/bray'
import Cary from './pages/freshman/cary'
import Crockett from './pages/freshman/crockett'
import Davison from './pages/freshman/davison'
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
import Stacwyck from './pages/sophomore/stacwyck'

// Upperclass dorms
import CityStationWest from './pages/upperclass/citystationwest'
import Polytechnic from './pages/upperclass/polytechnic'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* LandingPage, Signup, and Signin do not have Header and Footer */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<LandingPage />} />

          {/* Other pages have Header and Footer */}
          <Route
            path="/*"
            element={
              <>

                <Header />
                <div className="pages">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />


                    <Route
                      path="/home"
                      element={<Home />}
                    />
                    <Route
                      path="/AllDorms/"
                      element={<AllDorms />}
                    />

                    <Route
                      path="/freshman/barh"
                      element={<Barh />}
                    />
                    <Route
                      path="/freshman/barton"
                      element={<Barton />}
                    />
                    <Route
                      path="/freshman/bray"
                      element={<Bray />}
                    />
                    <Route
                      path="/freshman/cary"
                      element={<Cary />}
                    />
                    <Route
                      path="/freshman/crockett"
                      element={<Crockett />}
                    />
                    <Route
                      path="/freshman/davison"
                      element={<Davison />}
                    />
                    <Route
                      path="/freshman/hall"
                      element={<Hall />}
                    />
                    <Route
                      path="/freshman/nason"
                      element={<Nason />}
                    />
                    <Route
                      path="/freshman/nugent"
                      element={<Nugent />}
                    />
                    <Route
                      path="/freshman/sharp"
                      element={<Sharp />}
                    />
                    <Route
                      path="/freshman/warren"
                      element={<Warren />}
                    />

                    <Route
                      path="/sophomore/blitman"
                      element={<Blitman />}
                    />
                    <Route
                      path="/sophomore/bryckwyck"
                      element={<Bryckwyck />}
                    />
                    <Route
                      path="/sophomore/colonie"
                      element={<Colonie />}
                    />
                    <Route
                      path="/sophomore/ecomplex"
                      element={<EComplex />}
                    />
                    <Route
                      path="/sophomore/north"
                      element={<North />}
                    />
                    <Route
                      path="/sophomore/quad"
                      element={<Quad />}
                    />
                    <Route
                      path="/sophomore/rahpa"
                      element={<RahpA />}
                    />
                    <Route
                      path="/sophomore/rahpb"
                      element={<RahpB />}
                    />
                    <Route
                      path="/sophomore/stacwyck"
                      element={<Stacwyck />}
                    />

                    <Route
                      path="/upperclass/citystationwest"
                      element={<CityStationWest />}
                    />
                    <Route
                      path="/upperclass/polytechnic"
                      element={<Polytechnic />}
                    />

                    <Route
                      path="/AboutUs/"
                      element={<AboutUs />}
                    />
                    <Route
                      path="/FAQ/"
                      element={<FAQ />}
                    />
                    {/* Redirect any unknown route to LandingPage */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
