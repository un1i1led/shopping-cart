type PlantType = {
    id: string,
    name: string,
    cost: number,
    link: string,
    description: string,
    count: number
}

type CartProps = {
    items: Array<PlantType>,
    setItems: Function
}

const changeCount = (props:CartProps, id: string, input: string): Boolean => {
    const notItem = props.items.filter((item) => id !== item.id);
    const itemToChange = props.items.filter((item) => id === item.id)[0];
    const indexItem = props.items.indexOf(itemToChange);

    let newArr: Array<PlantType> = [];

    itemToChange.count = input === '+' ? itemToChange.count + 1 : itemToChange.count - 1;
    if (itemToChange.count <= 0) {
        newArr = [...notItem];
        props.setItems(newArr);
        return false;
    }

    for (let i = 0; i < props.items.length; i++) {
        if (i === indexItem) {
            newArr.push(itemToChange);
        } else {
            newArr.push(props.items[i]);
        }
    }

    props.setItems(newArr);
    return true;
}

const removeItem = (props:CartProps, id: string) => {
    const notItem = props.items.filter((item) => id !== item.id);
    props.setItems(notItem);
}

const createCards = (props: CartProps) => {
    return (
        props.items.map((data, key) => {
            return (
                <div className='cart-item' key={key}>
                    <div className='item-left'>
                        <img src={data.link} alt={data.name}/>
                    </div>
                    <div className='item-right'>
                        <h3>{data.name}</h3>
                        <div className='item-right-small'>
                            <p>${data.cost}</p>
                            <div className='item-quantity'>
                                <p className='p-plus-minus' onClick={() => changeCount(props, data.id, '-')}>-</p>
                                <p>{data.count}</p>
                                <p className='p-plus-minus' onClick={() => changeCount(props, data.id, '+')}>+</p>
                            </div>
                            <button className='cart-remove' onClick={() => removeItem(props, data.id)}>Remove</button>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

const calculateTotal = (props: CartProps) => {
    let total = props.items.reduce((acc, currentValue) => acc + (
        currentValue.count * currentValue.cost
    ), 0)

    return total;
}

const Cart = (props: CartProps) => {
    return (
        <div className='cart-main'>
            <div className='cart-left'>
                {createCards(props)}
            </div>
            <div className='cart-right'>
                <h3>Total</h3>
                <p>{calculateTotal(props)}$</p>
                <button id='btn-checkout' className='btn-big'>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Cart;