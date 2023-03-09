type CardProps ={
    icon: string,
    key: number,
    name: any
}

const Card = (props: CardProps) => {
    return (
        <div className='card'>
            <img className='card-img' src={props.icon} alt='plant'/>
            <p>{props.name}</p>
        </div>
    )
}

export default Card;