import { useContext, Fragment } from 'react';
import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview.component"
import { CategoryContext } from '../../context/CategoriesContext';

const CategoriesPreview  = () => {
    const { categoriesMap } = useContext(CategoryContext);
    return (
        <Fragment>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                )
            })}
        </Fragment>
    )
}
export default CategoriesPreview ;