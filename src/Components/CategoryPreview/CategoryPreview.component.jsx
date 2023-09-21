import ProductItem from '../ProductItem/ProductItem.component';
import { CategoryPreviewContainer, Title, Preview  } from './CategoryPreview.style'
const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products
                    .filter((product, idx) => idx < 4)
                    .map(product => <ProductItem key={product.id} product={product} />)
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;