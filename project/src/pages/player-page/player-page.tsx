import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {fetchFilmById} from '../../store/film-data/api-actions';
import {getFilm, getIsFilmLoading} from '../../store/film-data/selectors';

import Loader from '../../components/loader/loader';
import NotFoundPage from '../not-found-page/not-found-page';
import VideoPlayer from '../../components/video-player/video-player';

function PlayerPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const {id} = useParams();
  const filmId = Number(id);

  const film = useAppSelector(getFilm);
  const isFilmLoading = useAppSelector(getIsFilmLoading);

  useEffect(() => {
    if (filmId) {
      dispatch(fetchFilmById(filmId));
    }
  }, [dispatch, filmId]);

  if (isFilmLoading) {
    return <Loader />;
  }

  if (!film || !id) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Helmet>
        <title>WTW: {film.name}</title>
      </Helmet>

      <VideoPlayer film={film} />
    </>
  );
}

export default PlayerPage;
