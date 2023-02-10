import {memo, useEffect} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import cn from 'classnames';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {setGenre} from '../../store/films-data/films-data';
import {getGenres, getActiveGenre} from '../../store/films-data/selectors';
import {DEFAULT_GENRE} from '../../constants';

function GenreList (): JSX.Element {
  const dispatch = useAppDispatch();
  const genres = useAppSelector(getGenres);
  const activeGenre = useAppSelector(getActiveGenre);
  const [searchParams] = useSearchParams();
  const searchGenre = searchParams.get('genre');

  useEffect(() => {
    if (searchGenre === activeGenre) {
      return;
    }

    if (searchGenre) {
      dispatch(setGenre(searchGenre));
      return;
    }

    dispatch(setGenre(DEFAULT_GENRE));
  }, [dispatch, activeGenre, searchGenre]);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={cn('catalog__genres-item',
            {'catalog__genres-item--active': genre === activeGenre}
          )}
        >
          <Link className="catalog__genres-link" to={`?genre=${genre}`}>
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(GenreList);
