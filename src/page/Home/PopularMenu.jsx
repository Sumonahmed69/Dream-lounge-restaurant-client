
import useMenu from "../../hooks/useMenu";
import MenuItem from "../Shared/MenuItem";


const PopularMenu = () => {
  // const [menus, setMenus] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenus(popularItems);
  //     });
  // }, []);
  const {menu} =useMenu()
  const popularItems = menu.filter((item) => item.category === "popular");
  return (
    <section className="m-6">
     

      <div className="grid md:grid-cols-2 gap-10 container mx-auto">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className=" my-12 items-center justify-center flex ">
        <h1
          className="text-xl pb-3 px-3 rounded-lg border-b-2 hover:border-black"
        >
          VIEW FULL MENU
        </h1>
      </div>
    </section>
  );
};

export default PopularMenu;
