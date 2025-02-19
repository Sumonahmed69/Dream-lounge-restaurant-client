import { Link } from "react-router";
import MenuItem from "../Shared/MenuItem";
import Cover from "../Shared/Cover/Cover";
// import Cover from "../Shared/Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
  
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="my-6 container mx-auto px-3">
        <div className="grid md:grid-cols-2 gap-10 my-16">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>

        <Link to={`/order/${title}`}>
          <div className=" my-12 items-center justify-center flex ">
            <button className="btn btn-outline  px-3 border-0 border-b-2 hover:border-black">
              Order Now
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
