import {DirectoryBodyContainer, DirectoryItemContainer, BackgroundImageContainer} from './DirectoryItem.styles.jsx';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({category}) => {
    const {title, imageUrl} = category;
    const navigate = useNavigate();

    const handleDirectoryLinks = () => {
        navigate(`/shop/${title}`)
    }

    return (
        <DirectoryItemContainer>
            <BackgroundImageContainer image={imageUrl} />
            <DirectoryBodyContainer onClick={handleDirectoryLinks}>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryBodyContainer>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;