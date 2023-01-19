import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Authorization
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
