import { useParams } from 'react-router';
import { imgs } from './imgLink';

const PlantDetail = () => {

    const { id } = useParams<{id: string}>()

    const plant = imgs.find(el => el.id == id)

    return (
        <div className='plant-main'>
            {plant?.name}
        </div>
    )
}

export default PlantDetail;