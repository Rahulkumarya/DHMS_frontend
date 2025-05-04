import { useSelector } from "react-redux";

const useUserAuth = () => {
  const { user } = useSelector((state: any) => state.auth);

  return !!user;
};

export default useUserAuth;
