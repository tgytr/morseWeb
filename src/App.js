import "./App.css";
import CustomNavbar from "./components/Navbar/CustomNavbar";

// import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter,
  // HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import ContactUsScreen from "./screens/ContactUsScreen";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/*<BrowserRouter>*/}
        <CustomNavbar />
        <Routes style={{ flex: 1 }}>
          {/*<Route path='/' exact />*/}
          <Route path="/home" element={<HomeScreen />} />
          {/*<Route path="/" element={<AboutUsScreen />} />*/}
          <Route path="/contactus" element={<ContactUsScreen />} />
          {/*<Route path="/" element={<HomeScreen />} />*/}
          {/*<Route path="/" element={<HomeScreen />} />*/}
          {/* /!*<Route path='/services' component={Services} />*!/*/}
          {/* /!*<Route path='/products' component={Products} />*!/*/}
          {/* <Route path="/login" component={LoginScreen} />*/}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
