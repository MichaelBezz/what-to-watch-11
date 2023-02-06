import {Link, generatePath} from 'react-router-dom';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import PlayButton from '../play-button/play-button';
import MyListButton from '../my-list-button/my-list-button';

import {Film} from '../../types/film';
import {AppRoute} from '../../constants';
import './promo-card.css';

type PromoCardProps = {
  promoFilm: Film;
};

function PromoCard({promoFilm}: PromoCardProps): JSX.Element {
  const {id, name, posterImage, backgroundImage, backgroundColor, genre, released} = promoFilm;

  return (
    <section className="film-card" style={{backgroundColor}}>
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />
        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <Link className="film-card__link" to={generatePath(AppRoute.Film, {id: `${id}`})}>
              <img src={posterImage} width="218" height="327" alt={name} />
            </Link>
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">
              <Link className="film-card__link" to={generatePath(AppRoute.Film, {id: `${id}`})}>
                {name}
              </Link>
            </h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <div className="film-card__buttons">
              <PlayButton filmId={id} />
              <MyListButton filmId={promoFilm.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoCard;
