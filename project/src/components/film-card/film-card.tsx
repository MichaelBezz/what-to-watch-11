import {useState, useEffect} from 'react';
import {Link, generatePath} from 'react-router-dom';
import {AppRoute} from '../../constants';
import {Film} from '../../types/film';

type FilmCardProps = {
  film: Film;
};

const PLAYING_DELAY = 1000;

function FilmCard({film}: FilmCardProps): JSX.Element {
  const {id, name, previewImage, previewVideoLink} = film;

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isHovered) {
      timer = setTimeout(() => {
        setIsPlaying(true);
      }, PLAYING_DELAY);
    } else {
      setIsPlaying(false);
    }

    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPlaying ? (
        <Link to={generatePath(AppRoute.Film, {id: `${id}`})}>
          <video src={previewVideoLink} width="280" height="175" autoPlay loop muted />
        </Link>
      ) : (
        <>
          <Link to={generatePath(AppRoute.Film, {id: `${id}`})}>
            <div className="small-film-card__image">
              <img
                src={previewImage}
                width="280"
                height="175"
                alt={name}
              />
            </div>
          </Link>

          <h3 className="small-film-card__title">
            <Link
              className="small-film-card__link"
              to={generatePath(AppRoute.Film, {id: `${id}`})}
            >
              {name}
            </Link>
          </h3>
        </>
      )}
    </article>
  );
}

export default FilmCard;
