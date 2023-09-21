import { createContext, useState, useEff, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoryContext = createContext({
    categoriesMap: []
})

export const CategoryProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})
    useEffect(()=>{
        const handleCategoriesMap = async () => {
            const cMap = await getCategoriesAndDocuments();
            setCategoriesMap(cMap);
        }
        handleCategoriesMap()
    }, [])
    const value = { categoriesMap }
    return (<CategoryContext.Provider value={value}> { children }</CategoryContext.Provider >)
}
