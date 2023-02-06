import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import MyListButton from '../my-list-button/my-list-button';
import {Film} from '../../types/film';

type PromoCardProps = {
  promoFilm: Film;
};

function PromoCard({promoFilm}: PromoCardProps): JSX.Element {
  const {name, posterImage, backgroundImage, backgroundColor, genre, released} = promoFilm;

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
            <img src={posterImage} width="218" height="327" alt={name} />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>

              <MyListButton filmId={promoFilm.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoCard;
