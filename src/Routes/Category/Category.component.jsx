import { useContext, useState, useEffect,Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductItem from "../../Components/ProductItem/ProductItem.component";
import { CategoryContext } from "../../context/CategoriesContext";

import {CategoryContainer, CategoryTitle} from './Category.style'

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoryContext);
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category[0].toUpperCase() + category.slice(1)])
    }, [category, categoriesMap])
    
    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products &&
                    products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
            </CategoryContainer>
        </Fragment>
    )
}

export default Category;