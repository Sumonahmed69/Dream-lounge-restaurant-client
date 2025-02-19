import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";

const OurMenuPage = () => {
  const img =
    "https://images.unsplash.com/photo-1635342663404-5438d5c385af?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const img2 =
    "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const img4 =
    "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const img5 =
    "https://images.unsplash.com/photo-1604908550665-327363165423?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const img6 =
    "https://images.unsplash.com/photo-1583912402014-5c5a5fa28bf0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const img7 =
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const { menu } = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");

  return (
    <div>
      <Helmet>
        <title>Dream Lounge Menus</title>
      </Helmet>
      <Cover img={img} title={"Our Menu"}></Cover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={" Today's Offer"}
      ></SectionTitle>

      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={img4}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={img2}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={img5}></MenuCategory>
      <MenuCategory items={dessert} title={"dessert"} img={img6}></MenuCategory>

      <MenuCategory items={drinks} title={"drinks"} img={img7}></MenuCategory>
    </div>
  );
};

export default OurMenuPage;
