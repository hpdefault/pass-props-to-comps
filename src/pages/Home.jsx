import UniButton from "../components/Button"
import ButtonWrap from "../components/ButtonWrap"
import CardWrapper from "../components/Card1Wrapper"
import '../css/Home.css'
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className="home"> 
            <h1>Click the button on about us that looks like this</h1>
            <UniButton label={'like this'} />
            <div className="card-wrap-wrap">
                <CardWrapper />
                <ButtonWrap  label="test1"/>
            </div>
            <Link to='/buttonpg' className='nav-link'>Buttonpg</Link>
        </div>
        
    )
}

export default Home