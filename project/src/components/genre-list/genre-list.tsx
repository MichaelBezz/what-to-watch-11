import {Link} from 'react-router-dom';
import cn from 'classnames';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {changeGenre, getFilmsByGenre} from '../../store/action';
import {Genre} from '../../constants';

const genres: Genre[] = Object.values(Genre);

function GenreList (): JSX.Element {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={cn('catalog__genres-item',
            {'catalog__genres-item--active': genre === activeGenre}
          )}
        >
          <Link
            className="catalog__genres-link"
            to={`?genre=${genre}`}
            onClick={() => {
              dispatch(changeGenre(genre));
              dispatch(getFilmsByGenre(genre));
            }}
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
