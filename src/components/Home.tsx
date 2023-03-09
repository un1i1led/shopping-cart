import { Link } from 'react-router-dom'; 

const Home = () => {
    return (
        <div className='home'>
            <div className='home-left'></div>
            <div className='home-right'>
                <h1 className='header-h1'>Plantify</h1>
                <div className='btn-div'>
                    <Link to='/shop'>
                        <button className='btn-big'>S&nbsp;h&nbsp;o&nbsp;p</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;