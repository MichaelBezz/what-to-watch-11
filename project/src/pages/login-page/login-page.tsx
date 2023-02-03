import {useState, ChangeEvent, FormEvent} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {login} from '../../store/user-data/api-actions';
import {getIsAuthorization} from '../../store/user-data/selectors';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import {AppRoute} from '../../constants';

type FormData = {
  email: string;
  password: string;
};

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthorization = useAppSelector(getIsAuthorization);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(formData));
    navigate(AppRoute.Main);
  };

  if (isAuthorization) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleFormSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
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
            <div className="sign-in__field">
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
