
import FoodCard from "../../components/FoodCard";

const OderTab = ({items}) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OderTab;
