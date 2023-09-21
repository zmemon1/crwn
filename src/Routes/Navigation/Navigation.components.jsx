import { Outlet, Link, useActionData } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../Components/CartIcon/CartIcon.component";
import CartDropdown from "../../Components/CartDropdown/CartDropdown.components";
import { CartContext } from "../../context/CartContext";
import {NavLink, NavlinksContainer, NavigationContainer, LogoContainer} from './Navigation.styles';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavlinksContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    <NavLink to='/contact'>
                        CONTACT
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavlinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
};

export default Navigation;