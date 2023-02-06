import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {fetchFavoriteFilms, postFavoriteFilm} from '../../store/favorite-films-data/api-actions';
import {getFavoriteFilms} from '../../store/favorite-films-data/selectors';
import {getIsAuthorization} from '../../store/user-data/selectors';
import {FilmId} from '../../types/film';
import {AppRoute} from '../../constants';

type MyListButtonProps = {
  filmId: FilmId;
};

function MyListButton ({filmId}: MyListButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isFavorite = favoriteFilms.find((item) => item.id === filmId)?.isFavorite;
  const isAuthorization = useAppSelector(getIsAuthorization);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && isAuthorization) {
      dispatch(fetchFavoriteFilms());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, isAuthorization]);

  const handleButtonClick = () => {
    if (isAuthorization) {
      dispatch(postFavoriteFilm({
        filmId,
        status: isFavorite ? 0 : 1
      }));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleButtonClick}
    >
      {isFavorite && isAuthorization ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      )}

      <span>My list</span>
      <span className="film-card__count">
        {isAuthorization ? favoriteFilms.length : 0}
      </span>
    </button>
  );
}

export default MyListButton;
