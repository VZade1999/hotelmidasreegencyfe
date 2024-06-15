import "./App.css";
import Notificationbar from "./Component/Notificationbar";
import Header from "./Component/Header";
import Homepage from "./Component/Homepage";
import Team from "./Component/Team";
import Blog from "./Component/Blog";
import Newsletter from "./Component/Newsletter";
import Footer from "./Component/Footer";
import Maintanance from "./Assets/Maintanance";
import PrivacyCookiesPolicy from "./Component/Privacy&CookiesPolicy";
import Disclaimer from "./Component/Disclaimer";
import PartyHall from "./Component/PartyHall";
import Login from "./Component/User/Login";
import Register from "./Component/User/Register";
import Orderonline from "./Component/FoodDelivery/Orderonline";
import ProductLists from "./Component/FoodDelivery/ProductLists";
import BookRoom from "./Component/BookRoom/Bookroom";
import Checkavailability from "./Component/BookRoom/Checkavailability";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Component/BookRoom/Checkout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Notificationbar />
                <Header />
                <Homepage />
                <PartyHall />
                <Team />
                <Blog />
                <Newsletter />
                <Footer />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Notificationbar />
                <Header />
                <Team />
                <Footer />
              </>
            }
          />
          <Route
            path="/blogs"
            element={
              <>
                <Notificationbar />
                <Header />
                <Blog />
                <Footer />
              </>
            }
          />
          <Route
            path="/newsletter"
            element={
              <>
                <Notificationbar />
                <Header />
                <Newsletter />
                <Footer />
              </>
            }
          />
          <Route
            path="/maintanance"
            element={
              <>
                <Notificationbar />
                <Header />
                <Maintanance />
              </>
            }
          />
          <Route
            path="/PrivacyCookiesPolicy"
            element={
              <>
                <Notificationbar />
                <Header />
                <PrivacyCookiesPolicy />
                <Footer />
              </>
            }
          />
          <Route
            path="/disclaimer"
            element={
              <>
                <Notificationbar />
                <Header />
                <Disclaimer />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Notificationbar />
                <Header />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Notificationbar />
                <Header />
                <Register />
                <Footer />
              </>
            }
          />
           <Route
            path="/about-us"
            element={
              <>
                <Notificationbar />
                <Header />
                <Footer />
              </>
            }
          />
          <Route path="/orderonline" element={ <><Orderonline />  </> } />
          <Route
            path="/orderonline/productlist/"
            element={
              <>
                
                <Header />
                <ProductLists/>
                <Footer />
              </>
            }
          />
          <Route path="/orderonline" element={ <><Orderonline />  </> } />
          <Route path="/bookroom" element={ <><Header /><BookRoom /> <Footer /> </> } />
          <Route path="/bookroom/checkout" element={ <><Header /><Checkout/><Footer /> </> } />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
