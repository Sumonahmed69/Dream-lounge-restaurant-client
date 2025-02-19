import AdBanner from "./AdBanner";
import Banner from "./Banner";
import Featured from "./Featured";
import FoodCategory from "./FoodCategory";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <FoodCategory></FoodCategory>
      <AdBanner></AdBanner>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default HomePage;
