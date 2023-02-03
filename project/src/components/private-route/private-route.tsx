import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getIsAuthorization} from '../../store/user-data/selectors';
import {AppRoute} from '../../constants';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const isAuthorization = useAppSelector(getIsAuthorization);

  return (
    isAuthorization
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
