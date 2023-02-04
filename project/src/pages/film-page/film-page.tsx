import {useEffect} from 'react';
import {Link, generatePath, useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {fetchFilmById} from '../../store/film-data/api-actions';
import {fetchSimilarFilms} from '../../store/similar-films-data/api-actions';
import {getFilm, getIsFilmLoading} from '../../store/film-data/selectors';
import {getSimilarFilms, getIsSimilarFilmsLoading} from '../../store/similar-films-data/selectors';
import {getIsAuthorization} from '../../store/user-data/selectors';

import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import TabsList from '../../components/tabs-list/tabs-list';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Loader from '../../components/loader/loader';
import NotFoundPage from '../not-found-page/not-found-page';

import {AppRoute} from '../../constants';

const MAX_SIMILAR_FILMS = 4;

function FilmPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const filmId = Number(id);

  const film = useAppSelector(getFilm);
  const isFilmLoading = useAppSelector(getIsFilmLoading);
  const similarFilms = useAppSelector(getSimilarFilms);
  const isSimilarFilmLoading = useAppSelector(getIsSimilarFilmsLoading);
  const isAuthorization = useAppSelector(getIsAuthorization);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && filmId) {
      dispatch(fetchFilmById(filmId));
      dispatch(fetchSimilarFilms(filmId));
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, filmId]);

  if (isFilmLoading || isSimilarFilmLoading) {
    return <Loader />;
  }

  if (!film || !id) {
    return <NotFoundPage />;
  }

  const {name, posterImage, backgroundImage, backgroundColor, genre, released} = film;

  return (
    <>
      <Helmet>
        <title>WTW: {name}</title>
      </Helmet>

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

                {isAuthorization && (
                  <Link
                    className="btn film-card__button"
                    to={generatePath(AppRoute.Review, {id: `${filmId}`})}
                  >
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} width="218" height="327" alt={name} />
            </div>

            <TabsList film={film} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms.slice(0, MAX_SIMILAR_FILMS)} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
