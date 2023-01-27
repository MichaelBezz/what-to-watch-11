import {Link, generatePath} from 'react-router-dom';

import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import TabsList from '../../components/tabs-list/tabs-list';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';

import {Films, Film} from '../../types/film';
import {Reviews} from '../../types/review';
import {AppRoute} from '../../constants';

type FilmPageProps = {
  film: Film;
  similarFilms: Films;
  reviews: Reviews;
};

function FilmPage({film, similarFilms, reviews}: FilmPageProps): JSX.Element {
  const {
    id,
    name,
    posterImage,
    backgroundImage,
    backgroundColor,
    genre,
    released
  } = film;

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
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
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link
                  className="btn film-card__button"
                  to={generatePath(AppRoute.Review, {id: `${id}`})}
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} width="218" height="327" alt={name} />
            </div>

            <TabsList film={film} reviews={reviews} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
