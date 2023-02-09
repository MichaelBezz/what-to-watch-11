import {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {fetchPromoFilm} from '../../store/promo-film-data/api-actions';
import {fetchFilms} from '../../store/films-data/api-actions';
import {getPromoFilm, getIsPromoFilmLoading} from '../../store/promo-film-data/selectors';
import {getFilmsByGenre, getIsFilmsLoading} from '../../store/films-data/selectors';

import Loader from '../../components/loader/loader';
import PromoCard from '../../components/promo-card/promo-card';
import GenreList from '../../components/genre-list/genre-list';
import FilmsList from '../../components/films-list/films-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import Footer from '../../components/footer/footer';

const FILMS_PER_STEP = 8;

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [filmsDisplayed, setFilmsDisplayed] = useState<number>(0);

  const promoFilm = useAppSelector(getPromoFilm);
  const isPromoFilmLoading = useAppSelector(getIsPromoFilmLoading);
  const filmsByGenre = useAppSelector(getFilmsByGenre);
  const isFilmsLoading = useAppSelector(getIsFilmsLoading);

  useEffect(() => {
    dispatch(fetchPromoFilm());
    dispatch(fetchFilms());
  }, [dispatch]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setFilmsDisplayed(Math.min(FILMS_PER_STEP, filmsByGenre.length));
    }

    return () => {
      isMounted = false;
    };
  }, [filmsByGenre]);

  const handleShowMoreButtonClick = () => {
    setFilmsDisplayed((prevFilmsDisplayed) =>
      Math.min(prevFilmsDisplayed + FILMS_PER_STEP, filmsByGenre.length)
    );
  };

  if (isPromoFilmLoading || isFilmsLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>What To Watch</title>
      </Helmet>

      {promoFilm && <PromoCard promoFilm={promoFilm} />}

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />

          <FilmsList films={filmsByGenre.slice(0, filmsDisplayed)} />

          {filmsByGenre.length > filmsDisplayed && (
            <ShowMoreButton onClick={handleShowMoreButtonClick} />
          )}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
