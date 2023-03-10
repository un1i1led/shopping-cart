import { useParams } from 'react-router';
import { imgs } from './imgLink';
import { useState } from 'react';
import { plus, minus } from './imgLink';

const PlantDetail = () => {

    const [itemCount, setItemCount] = useState(1);
    const { id } = useParams<{id: string}>()

    const plant = imgs.find(el => el.id === id)

    const changeAmount = (sign: string) => {
        if (sign === '+') {
            setItemCount(itemCount + 1);
        } else if (sign === '-' && itemCount === 1) {

        } else {
            setItemCount(itemCount - 1);
        }
    }

    return (
        <div className='plant-main'>
            <div className='detail-info'>
                <div className='detail-left'>
                    <img className='detail-img' src={plant?.link} alt='plant'/>
                </div>
                <div className='detail-right'>
                    <h1>{plant?.name}</h1>
                    <div className='plant-desc-div'>
                        <p>{plant?.description}</p>
                    </div>
                    <div className='detail-btns'>
                        <button className='cart-btn' id='add-cart'>Add To Cart</button>
                        <img src={minus} className='cart-btn plus-minus'
                        alt='reduce item count' onClick={() => {changeAmount('-')}}/>
                        <p>{itemCount}</p>
                        <img src={plus} className='cart-btn plus-minus'
                        alt='increase item count' onClick={() => {changeAmount('+')}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantDetail;