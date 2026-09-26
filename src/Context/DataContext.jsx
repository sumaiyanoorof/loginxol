// this is for e-commerce-website

import { createContext, useState } from "react";

export const DataContext = createContext (null);

export const DataProvider =({children}) =>{
    const [data,setData] = useState()

  //fettching all products from api
    const fetchAllProducts = async() =>{
        try {
            const res =await axios
        } catch (error) {
           console.log(error);
        }
    }

    return <DataContext.Provide value={{data,setData}}>
        {children}
    </DataContext.Provider>
}