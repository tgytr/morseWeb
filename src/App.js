import "./App.css";
import CustomNavbar from "./components/Navbar/CustomNavbar";

// import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import {
  // HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import ContactUsScreen from "./screens/ContactUsScreen";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      {/*<HashRouter>*/}
      {/*<BrowserRouter>*/}
      <CustomNavbar />
      <Routes
        style={{ flex: 1 }}
        // basename={`/https://tgytr.github.io/morseWeb`}
      >
        {/*<Route path='/' exact />*/}
        <Route exact path="" element={<HomeScreen />} />
        {/*<Route path="/" element={<AboutUsScreen />} />*/}
        <Route exact path="/contactus" element={<ContactUsScreen />} />
        {/*<Route path="/" element={<HomeScreen />} />*/}
        {/*<Route path="/" element={<HomeScreen />} />*/}
        {/* /!*<Route path='/services' component={Services} />*!/*/}
        {/* /!*<Route path='/products' component={Products} />*!/*/}
        {/* <Route path="/login" component={LoginScreen} />*/}
      </Routes>
      <Footer />
      {/*</HashRouter>*/}
    </div>
  );
}

export default App;
