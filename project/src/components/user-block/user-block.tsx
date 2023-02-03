import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {logout} from '../../store/user-data/api-actions';
import {getUserData, getIsAuthorization} from '../../store/user-data/selectors';
import {AppRoute} from '../../constants';

function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);
  const isAuthorization = useAppSelector(getIsAuthorization);

  const handleSignOutClick = () => {
    dispatch(logout());
  };

  return (isAuthorization && userData ? (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src={userData.avatarUrl}
            width="63"
            height="63"
            alt={userData.name}
          />
        </div>
      </li>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          to={AppRoute.Main}
          onClick={handleSignOutClick}
        >
          Sign out
        </Link>
      </li>
    </ul>
  ) : (
    <div className="user-block">
      <Link className="user-block__link" to={AppRoute.Login}>
        Sign in
      </Link>
    </div>
  ));
}

export default UserBlock;
