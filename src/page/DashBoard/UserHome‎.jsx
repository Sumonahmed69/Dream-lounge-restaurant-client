import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";



const UserHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className=" p-4 sm:ml-64 flex gap-2 mt-14 flex-col translate-all">
            <h2 className="text-3xl">
                <span>Hi, Welcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default UserHome;