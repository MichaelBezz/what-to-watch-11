import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import MoviePage from '../../pages/movie-page/movie-page';
import PlayerPage from '../../pages/player-page/player-page';
import ReviewPage from '../../pages/review-page/review-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

import {promoFilm} from '../../mock/promo-film';
import {AppRoute, AuthorizationStatus, FILM_COUNT} from '../../constants';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage promoFilm={promoFilm} filmCount={FILM_COUNT} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Movie}
            element={<MoviePage />}
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
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
