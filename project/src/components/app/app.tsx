import {useEffect} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FilmPage from '../../pages/film-page/film-page';
import PlayerPage from '../../pages/player-page/player-page';
import ReviewPage from '../../pages/review-page/review-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

import {Films} from '../../types/film';
import {Reviews} from '../../types/review';
import {AppRoute, AuthorizationStatus} from '../../constants';

type AppProps = {
  films: Films;
  reviews: Reviews;
};

function App({films, reviews}: AppProps): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage films={films} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage />}
        />
        <Route
          path={AppRoute.Review}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Authorization}>
              <ReviewPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Authorization}>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundPage />}
        />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
