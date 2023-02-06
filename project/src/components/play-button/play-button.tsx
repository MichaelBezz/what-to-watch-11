import {useNavigate, generatePath} from 'react-router-dom';
import {FilmId} from '../../types/film';
import {AppRoute} from '../../constants';

type PlayButtonProps = {
  filmId: FilmId;
};

function PlayButton({filmId}: PlayButtonProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={() => navigate(generatePath(AppRoute.Player, {id: `${filmId}`}))}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayButton;
