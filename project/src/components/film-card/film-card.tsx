import {Link, generatePath} from 'react-router-dom';
import {AppRoute} from '../../constants';
import {Film} from '../../types/film';

type FilmCardProps = {
  film: Film;
  onActiveCard: (id: number | null) => void;
};

function FilmCard({film, onActiveCard}: FilmCardProps): JSX.Element {
  const {id, name, previewImage} = film;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onActiveCard(id)}
      onMouseLeave={() => onActiveCard(null)}
    >
      <div className="small-film-card__image">
        <img
          src={previewImage}
          width="280"
          height="175"
          alt={name}
        />
      </div>

      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={generatePath(AppRoute.Film, {id: `${id}`})}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
