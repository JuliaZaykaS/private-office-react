import UserMenu from '../UserMenu/UserMenu';
import { getIsLoggedIn, getUserName } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navbar, Container, Nav } from 'react-bootstrap';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userEmail = useSelector(getUserName);

  return (
    <>
      <Navbar bg="primary" variant="dark" sticky="top" className={s.navigation}>
        <Container>
          <Navbar.Brand exact="true" to="/">
            Phonebook
          </Navbar.Brand>
          <Nav>
            <div className={s.navigationBar}>
              <div>
                <NavLink
                  exact
                  to="/"
                  className={s.navLink}
                  activeClassName={s.navLinkActive}
                >
                  Home
                </NavLink>
              </div>

              {isLoggedIn ? (
                <div className={s.greetingsBox}>
                  <NavLink
                    to="/contacts"
                    className={s.navLink}
                    activeClassName={s.navLinkActive}
                  >
                    Phonebook
                  </NavLink>

                  <UserMenu userMail={userEmail} className={s.userMenu} />
                </div>
              ) : (
                <div className={s.entrance}>
                  <NavLink
                    exact
                    to="/login"
                    className={s.navLink}
                    activeClassName={s.navLinkActive}
                  >
                    LogIn
                  </NavLink>

                  <NavLink
                    to="/register"
                    className={s.navLink}
                    activeClassName={s.navLinkActive}
                  >
                    Registration
                  </NavLink>
                </div>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
