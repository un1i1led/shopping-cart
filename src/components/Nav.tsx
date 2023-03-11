import { Link } from 'react-router-dom';
import { cart } from './imgLink';

type PlantType = {
    id: string,
    name: string,
    cost: number,
    link: string,
    description: string,
    count: number
}

type NavProps = {items: Array<PlantType>}

const Nav = (props: NavProps) => {

    const displayAmountItems = () => {
        if (props.items.length > 0) {
            let sum = props.items.reduce((acc, currentValue) => acc + currentValue.count, 0);
            return (
                <p>{sum}</p>
            )
        }
    }

    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/cart'>
                    <li id='li-cart'>
                        <img src={cart} className='nav-cart'
                        alt='cart icon'/>
                        {displayAmountItems()}
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;