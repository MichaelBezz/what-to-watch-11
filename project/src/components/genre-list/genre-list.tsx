import {Link, useSearchParams} from 'react-router-dom';
import cn from 'classnames';
import {Genre} from '../../constants';

const genres: Genre[] = Object.values(Genre);

function GenreList (): JSX.Element {
  const [searchParams] = useSearchParams();
  const searchGenre = searchParams.get('genre');

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={cn('catalog__genres-item',
            {'catalog__genres-item--active': genre === searchGenre}
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

export default GenreList;
