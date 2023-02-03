import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getAuthorizationStatus} from '../../store/user-data/selectors';
import {AppRoute, AuthorizationStatus} from '../../constants';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorization = authorizationStatus === AuthorizationStatus.Authorization;

  return (
    isAuthorization
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
