import {Link, useLocation} from "react-router-dom"
import Logo from "../../../../assets/Logo.svg"
import {BsSearch} from "react-icons/bs"
import {RiUserHeartLine} from "react-icons/ri"
import {BiBookHeart} from "react-icons/bi"
import {LiaOpencart} from   "react-icons/lia"
import {useContext} from "react";
import {CustomContext} from "../../../../config/context/context";


const HeaderCenter = () => {

    const {user, logOutUser} = useContext(CustomContext);

    const location = useLocation();

    return (
        <nav className="header__center">
            <Link to={'/'}>
                <img src={Logo} width={250} alt=""/>
            </Link>

            <div className="header__center-search">
                <span className="header__center-glass">
                    <BsSearch/>
                </span>
                <input
                    type="search"
                    className="header__center-field"
                    placeholder="Поиск"
                />
                
            </div>

            <div className="header__center-icons">
                {
                    location.pathname === '/room' ? <span onClick={logOutUser} className="header__center-log">Выйти</span> : <Link to={user.email?.length ? '/room' : '/login'} className="header__center-icon">
                        <RiUserHeartLine/>
                    </Link>
                }

                <Link to={'/favorites'} className="header__center-icon">
                    <BiBookHeart/>
                </Link>
                <Link to={user.email?.length ? '/cart' : '/login'} className="header__center-icon">
                    <LiaOpencart/>
                </Link>
            </div>
        </nav>
    );
};

export default HeaderCenter;