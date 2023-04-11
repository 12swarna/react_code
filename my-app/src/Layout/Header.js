import './Header.css';
import{Fragment} from 'react';
import mealIsmage from '../../src/assests/Meals.jpg'
import HeaderCartButton from './HeaderCartButton'

function Header(){
    return(
        <Fragment>
        <header className="header">
            <h1>ReactMeals</h1>
            <HeaderCartButton></HeaderCartButton>
            
        </header>
        <div className='main-image'>
            <img src={mealIsmage} alt="full of delicious food"></img>
        </div>
       

        </Fragment>

    );

}
export default Header;