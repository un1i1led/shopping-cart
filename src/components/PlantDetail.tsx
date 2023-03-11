import { useParams } from 'react-router';
import { imgs } from './imgLink';
import { useState } from 'react';
import { plus, minus } from './imgLink';

type PlantType = {
    id: string,
    name: string,
    cost: number,
    link: string,
    description: string,
    count: number
}

type PlantDetailProps = {
    items: Array<PlantType>,
    setItems: Function
}

const PlantDetail = (props: PlantDetailProps) => {

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

    const addToCart = (numItems: number) => {
        if (props.items.find(el => el.id === plant?.id)) {
            let index = props.items.findIndex(el => el.id === plant?.id);
            
            let clone = {...props.items[index]};

            let without = props.items.filter(el => el.id !== clone.id);

            clone.count = clone.count + numItems;
        
            props.setItems([...without, clone]);
        } else {
            props.setItems([...props.items, {
                id: plant?.id,
                name: plant?.name,
                cost: plant?.cost,
                link: plant?.link,
                description: plant?.description,
                count: numItems
            }]);
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
                        <button className='cart-btn' id='add-cart' onClick={() => {addToCart(itemCount)}}>Add To Cart</button>
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