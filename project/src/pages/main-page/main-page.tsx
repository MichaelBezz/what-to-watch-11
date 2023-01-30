import {Helmet} from 'react-helmet-async';

import PromoCard from '../../components/promo-card/promo-card';
import GenreList from '../../components/genre-list/genre-list';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';

import {Films} from '../../types/film';

type MainPageProps = {
  films: Films;
};

function MainPage({films}: MainPageProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>What To Watch</title>
      </Helmet>

      <PromoCard promoFilm={films[0]} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />

          <FilmsList films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
