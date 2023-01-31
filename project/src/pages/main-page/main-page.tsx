import {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';

import PromoCard from '../../components/promo-card/promo-card';
import GenreList from '../../components/genre-list/genre-list';
import FilmsList from '../../components/films-list/films-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import Footer from '../../components/footer/footer';

import {useAppSelector} from '../../hooks/use-app-selector';

const FILMS_PER_STEP = 8;

function MainPage(): JSX.Element {
  const [filmsDisplayed, setFilmsDisplayed] = useState<number>(0);
  const filmsByGenre = useAppSelector((state) => state.filmsByGenre);

  useEffect(() => {
    setFilmsDisplayed(Math.min(FILMS_PER_STEP, filmsByGenre.length));
  }, [filmsByGenre]);

  const handleShowMoreButtonClick = () => {
    setFilmsDisplayed((prevFilmsDisplayed) =>
      Math.min(prevFilmsDisplayed + FILMS_PER_STEP, filmsByGenre.length)
    );
  };

  return (
    <>
      <Helmet>
        <title>What To Watch</title>
      </Helmet>

      <PromoCard promoFilm={filmsByGenre[0]} />

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
