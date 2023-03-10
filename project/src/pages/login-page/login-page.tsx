import {useState, ChangeEvent, FormEvent} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import cn from 'classnames';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {login} from '../../store/user-data/api-actions';
import {getIsAuthorization} from '../../store/user-data/selectors';

import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';

import {AuthorizationData} from '../../types/authorization';
import {AppRoute} from '../../constants';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuthorization = useAppSelector(getIsAuthorization);

  const [formData, setFormData] = useState<AuthorizationData>({
    email: '',
    password: ''
  });
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const validateForm = (formField: AuthorizationData): boolean => {
    const isEmailCorrect: boolean = (/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/).test(formField.email);
    const isPasswordCorrect: boolean = (/([0-9].*[a-z])|([a-z].*[0-9])/).test(formField.password);

    if (!isEmailCorrect) {
      setEmailError('Введите корректный Email, например mike@wtw.com');
      return false;
    }

    if (!isPasswordCorrect) {
      setPasswordError('Пароль должен состоять минимум из одной буквы и цифры');
      return false;
    }

    setEmailError('');
    setPasswordError('');
    return true;
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm(formData)) {
      dispatch(login(formData));

      setFormData({
        email: '',
        password: ''
      });

      navigate(AppRoute.Main);
    }
  };

  if (isAuthorization) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="user-page">
      <Helmet>
        <title>WTW: Sign in</title>
      </Helmet>

      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleFormSubmit}>
          {(emailError || passwordError) && (
            <div className="sign-in__message">
              <p>{emailError || passwordError}</p>
            </div>
          )}

          <div className="sign-in__fields">
            <div className={cn('sign-in__field', {'sign-in__field--error': !!emailError})}>
              <input
                id="user-email"
                className="sign-in__input"
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email address"
                onChange={handleFieldChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={cn('sign-in__field', {'sign-in__field--error': !!passwordError})}>
              <input
                id="user-password"
                className="sign-in__input"
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleFieldChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>

          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
