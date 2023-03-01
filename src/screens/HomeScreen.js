// import CustomNavbar from "./components/Navbar/CustomNavbar";
import HomeMainCarousel from "./../components/HomeMainCorousel/HomeMainCarousel";
import ServicesContainer from "./../components/ServicesContainer/ServicesContainer";
import ServicesContainerTwo from "./../components/ServicesContainerTwo/ServicesContainerTwo";
import PricingPlansContainer from "./../components/PricingPlansContainer/PricingPlansContainer";
// import Footer from "./../components/Footer/Footer";

function HomeScreen() {
  return (
    <div>
      <HomeMainCarousel />
      <ServicesContainer />
      <ServicesContainerTwo />
      <PricingPlansContainer />
      {/*<Footer />*/}
    </div>
  );
}

export default HomeScreen;
