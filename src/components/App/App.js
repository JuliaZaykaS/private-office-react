import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Section from '../Section/Section';
import TechInfo from '../TechInfo/TechInfo';
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';
import Navigation from '../Navigation/Navigation';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';
import {
  getIsCurrentUser,
  getError,
  getIsLoading,
  getUserName,
  getUserToken,
  getUserEmail,
} from '../../redux/auth/auth-selectors';
import { getCurrentUser, verify } from '../../redux/auth/auth-operations';

import ContactsPage from '../../views/ContactsPage';
import { Spinner } from 'react-bootstrap';
import {Link} from '../Link/Link'

export default function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(getIsCurrentUser);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const user = useSelector(getUserName)
  const token = useSelector(getUserToken)
  const email = useSelector(getUserEmail)
  console.log('from app', email);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {currentUser ? (
        <Section title={'Phonebook'}></Section>
      ) : (
        <>
          <Navigation />
          <Switch>
            <PublicRoute exact path="/">
              <Section title={'Welcome to your wonderful phonebook'}></Section>
            </PublicRoute>
            <PublicRoute exact path="/register" restricted redirectTo="/contacts">
            {/* <PublicRoute exact path="/register" restricted redirectTo="/login"> */}
            {/* <PublicRoute exact path="/register" redirectTo='/login'> */}
              <Section title={'Registration'}>
                <RegisterForm />
                {isLoading &&
                <TechInfo message={'Loading'}>
                  <Spinner animation="grow" variant="primary" />
                </TechInfo>
                }
                {user && !token &&
                <TechInfo message={'Please verify your email'}>
                  <TechInfo message={'If you can not find message'}>
                    {/* <a>click here</a> */}
                    <Link message={'click here'} onClickLink={()=> dispatch(verify({email}))}></Link>

                </TechInfo>
                </TechInfo>
                }
                {error && <TechInfo message={error} />}
              </Section>
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <Section title={'Login'}>
                <LoginForm />
                {isLoading &&
                <TechInfo message={'Loading'}>
                <Spinner animation="grow" variant="primary" />
                </TechInfo>
                }
                {error && <TechInfo message={error} />}
              </Section>
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              {isLoading ?
              <TechInfo message={'Loading'}>
              <Spinner animation="grow" variant="primary" />
              </TechInfo>
              : <ContactsPage />}
            </PrivateRoute>
          </Switch>
        </>
      )}
    </>
  );
}
