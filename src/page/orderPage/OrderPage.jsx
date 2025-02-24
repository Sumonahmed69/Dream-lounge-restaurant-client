import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import Cover from "../Shared/Cover/Cover";
import OderTab from "./OderTab";
import { useParams } from "react-router";
import { useState } from "react";
const OrderPage = () => {
  const categories = [
    "popular",
    "offered",
    "pizza",
    "soup",
    "dessert",
    "salad",
    "drinks",
  ];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const { menu } = useMenu();

  console.log(category);
  //new category add

  const popular = menu.filter((item) => item.category === "popular");
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");

  const shopImg =
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      <div>
        <Cover img={shopImg} title={"Order Your Food"}></Cover>

        <div className="my-16  mx-auto">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            className="flex flex-col  items-center"
          >
            <TabList>
              <Tab>Popular</Tab>
              <Tab>Offered</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Dessert </Tab>
              <Tab>Salad</Tab>
              <Tab>Drinks</Tab>
            </TabList>

            <TabPanel>
              <OderTab items={popular}></OderTab>
            </TabPanel>
            <TabPanel>
              <OderTab items={offered}></OderTab>
            </TabPanel>
            <TabPanel>
              <OderTab items={pizza}></OderTab>
            </TabPanel>
            <TabPanel>
              <OderTab items={soup}></OderTab>
            </TabPanel>
            <TabPanel>
              <OderTab items={dessert}></OderTab>
            </TabPanel>
            <TabPanel>
              <OderTab items={salad}></OderTab>
            </TabPanel>
            <TabPanel>
              <OderTab items={drinks}></OderTab>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
