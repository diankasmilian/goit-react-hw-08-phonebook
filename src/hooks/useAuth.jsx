import { useSelector } from "react-redux";
import { getIsLoggedIn, getIsRefreshing, getUsername } from "redux/auth/auth-selectors";

export const useAuth = () => {
   const isLoggedIn = useSelector(getIsLoggedIn);
   const isRefreshing = useSelector(getIsRefreshing)
   const getUser = useSelector(getUsername)

   return {
      isLoggedIn,
      isRefreshing,
      getUser,
    };
}