import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  //   const [menus, setMenus] = useState([]);
  //   const [loading, setloading] = useState(true);
  //   useEffect(() => {
  //     fetch("http://localhost:5000/menu")
  //       .then((res) => res.json())
  //       .then((data) => {

  //         setMenus(data);
  //         setloading(false)
  //       });
  //   }, []);
  //   return [menus, loading]

  const axiosPublic = useAxiosPublic();
  const {
    data: menu = [],
    // isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });

  // return [menu, loading, refetch];
  return {
    menu: menu || [],
    refetch, // Return the refetch function
  };
};

export default useMenu;
