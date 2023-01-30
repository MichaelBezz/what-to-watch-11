import {Helmet} from 'react-helmet-async';

import PromoCard from '../../components/promo-card/promo-card';
import GenreList from '../../components/genre-list/genre-list';
import FilmsList from '../../components/films-list/films-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import Footer from '../../components/footer/footer';

import {useAppSelector} from '../../hooks/use-app-selector';
import {Films} from '../../types/film';

type MainPageProps = {
  films: Films;
};

function MainPage({films}: MainPageProps): JSX.Element {
  const filmsByGenre = useAppSelector((state) => state.filmsByGenre);

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

          <FilmsList films={filmsByGenre} />

          <ShowMoreButton />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
