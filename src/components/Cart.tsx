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
                                <p className='p-plus-minus'>-</p>
                                <p>{data.count}</p>
                                <p className='p-plus-minus'>+</p>
                            </div>
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
            </div>
        </div>
    )
}

export default Cart;