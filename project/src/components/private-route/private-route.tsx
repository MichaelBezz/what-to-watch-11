import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getIsAuthorization} from '../../store/user-data/selectors';
import {AppRoute} from '../../constants';

type PrivateRouteProps = {
  privateComponent: JSX.Element;
}

function PrivateRoute({privateComponent}: PrivateRouteProps): JSX.Element {
  const isAuthorization = useAppSelector(getIsAuthorization);

  return (
    isAuthorization
      ? privateComponent
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
