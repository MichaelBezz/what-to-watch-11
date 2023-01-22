import {Link} from 'react-router-dom';
import Footer from '../../components/footer/footer';
import {AppRoute} from '../../constants';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Root}>Вернуться на главную</Link>

      <Footer />
    </>
  );
}

export default NotFoundPage;
