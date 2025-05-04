// import React,{ReactNode} from "react";
// import { Provider } from "react-redux";
// import { store } from "../redux/store";
// import { useRefreshToken } from "../hooks/useRefreshToken";

// interface ProvidersProps {
//     children:ReactNode;
// }


// export function Providers({children}:ProvidersProps){
//     useRefreshToken();
//     return <Provider store={store}>{children}</Provider>
// }





import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;



