import {useEffect} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {checkAuthorization} from '../../store/user-data/api-actions';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FilmPage from '../../pages/film-page/film-page';
import ReviewPage from '../../pages/review-page/review-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

import {AppRoute} from '../../constants';

function App(): JSX.Element {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthorization());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />

        <Route path={AppRoute.Film}>
          <Route index element={<FilmPage />} />
          <Route
            path={AppRoute.Review}
            element={<PrivateRoute privateComponent={<ReviewPage />} />}
          />
        </Route>

        <Route
          path={AppRoute.MyList}
          element={<PrivateRoute privateComponent={<MyListPage />} />}
        />

        <Route path={AppRoute.Player} element={<PlayerPage />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
