import Card from './Card';
import { Link } from 'react-router-dom';
import { bigLeaf, darkPot, holeyPlant, largeLeaf, longLeaf, thinPot, whiteRocks, yellowPot } from './imgLink';
import { imgs } from './imgLink';

const Shop = () => {

    const addCards = () => {
        return (
            imgs.map((data, key) => {
                const icon = imgs[key].link
                return (
                    <Link to={`/shop/${imgs[key].id}`} className='card-link' key={key}>
                        <Card key={key} icon={icon} name={imgs[key].name}/>
                    </Link>
                )
            })
        )
    }

    return (
        <div className='shop'>
            <div className='shop-main'>
                <div className='items-div'>
                    {addCards()}
                </div>
            </div>
        </div>
    )
}

export default Shop;