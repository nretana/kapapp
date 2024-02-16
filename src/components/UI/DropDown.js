import { useState, useContext } from 'react';
import AppContext from '../../store/app-context';
import './DropDown.scss';

const DropDown = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [currentVal, setCurrentVal] = useState('en');
    const appContext = useContext(AppContext);

    const clickButtonHandler = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    const mouseOutDropdownMenuHandler = (e) => {
        setIsOpenMenu(false);
    }

    const clickListItemHandler = (e) => {
        const currentValue = e.target.dataset.value;
        if(currentValue === null || undefined){
            return;
        }
        
        appContext.updateLang(currentValue);
        setCurrentVal(currentValue);
        setIsOpenMenu(false);
    };
    
    return(
        <div className='dropdown'>
            <button type='button' className='dropdown-button' aria-expanded={isOpenMenu} onClick={clickButtonHandler}>
               {currentVal === 'en' ? <span className='en-icon'>EN</span> : <span className='es-icon'>ES</span>}
            </button>
            {isOpenMenu &&
            <ul id="DropdDownMenu" className='dropdown-menu' onMouseLeave={mouseOutDropdownMenuHandler}>
                <li className='dropdown-item' onClick={clickListItemHandler} data-value='en'>
                    <span className='icon-us-flag me-2' aria-hidden='true'></span>
                    <span>English</span>
                </li>
                <li className='dropdown-item' onClick={clickListItemHandler} data-value='es'>
                    <span className='icon-cr-flag me-2' aria-hidden='true'></span>
                    <span>Spanish</span>
                </li>
            </ul>
            }
        </div>
    )
};

export default DropDown;