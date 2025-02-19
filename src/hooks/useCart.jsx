
import { useQuery } from "@tanstack/react-query";
import useAxiosSercure from "./useAxiosSercure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const useCart = () => {
    const axiosSecure = useAxiosSercure()
    const {user} =useContext(AuthContext)
  const {refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return [cart, refetch]
};

export default useCart;
