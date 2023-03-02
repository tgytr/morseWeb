import HomeMainCarousel from "./../components/HomeMainCorousel/HomeMainCarousel";
import ServicesContainer from "./../components/ServicesContainer/ServicesContainer";
import ServicesContainerTwo from "./../components/ServicesContainerTwo/ServicesContainerTwo";
import PricingPlansContainer from "./../components/PricingPlansContainer/PricingPlansContainer";

function HomeScreen() {
  return (
    <div>
      <HomeMainCarousel />
      <ServicesContainer />
      <ServicesContainerTwo />
      <PricingPlansContainer />
    </div>
  );
}

export default HomeScreen;
