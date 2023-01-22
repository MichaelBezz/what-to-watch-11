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
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
