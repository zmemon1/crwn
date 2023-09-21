import { Route, Routes } from 'react-router-dom';
import CategoryPreview from '../CategoryPreview/CategoryPreview.component';
import Category from '../Category/Category.component';
const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoryPreview />} />
            <Route path=':category' element={<Category />}/>
        </Routes>
    )
}
export default Shop;