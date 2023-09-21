import DirectoryItem from "../DirectoryItem/DirectoryItem.Components";
import {DirectoryContainer} from './Directory.style'

const Directory = ({ categories }) => {
    return (
        <DirectoryContainer>
            {
                categories.map((category) => (
                    <DirectoryItem key={category.id} category={category} />
                ))
            }
        </DirectoryContainer>
    );
}

export default Directory;