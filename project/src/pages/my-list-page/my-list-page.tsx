import {useEffect} from 'react';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {fetchFavoriteFilms} from '../../store/favorite-films-data/api-actions';
import {getFavoriteFilms, getIsFavoriteFilmsLoading} from '../../store/favorite-films-data/selectors';

import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Loader from '../../components/loader/loader';

function MyListPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isFavoriteFilmsLoading = useAppSelector(getIsFavoriteFilmsLoading);

  useEffect(() => {
    let isMounted = true;

    if (isMounted ) {
      dispatch(fetchFavoriteFilms());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  if (isFavoriteFilmsLoading) {
    return <Loader />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">
          My list
          <span className="user-page__film-count">
            {favoriteFilms.length}
          </span>
        </h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
