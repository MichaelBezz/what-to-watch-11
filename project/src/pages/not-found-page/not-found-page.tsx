import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';

import {AppRoute} from '../../constants';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW: Page not found</title>
      </Helmet>

      <header className="page-header user-page__head">
        <Logo />
        <h1 className="visually-hidden">WTW</h1>
      </header>

      <div className="user-page__content">
        <h1>404. Page not found</h1>
        <Link className="link" to={AppRoute.Main}>
          Go back to main page.
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
