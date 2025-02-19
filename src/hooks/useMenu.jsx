import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";

const useMenu = () => {

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

 
  return {
    menu: menu || [],
    refetch, // Return the refetch function
  };
};

export default useMenu;
