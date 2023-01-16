import {Link} from 'react-router-dom';
import { AppRoute } from '../../constants';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Root}>Вернуться на главную</Link>
    </>
  );
}

export default NotFoundPage;
