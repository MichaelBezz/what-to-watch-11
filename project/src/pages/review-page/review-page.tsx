import {useEffect} from 'react';
import {Link, generatePath, useParams, useNavigate} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {fetchFilmById} from '../../store/film-data/api-actions';
import {postReview} from '../../store/reviews-data/api-actions';
import {getFilm, getIsFilmLoading} from '../../store/film-data/selectors';

import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import ReviewForm from '../../components/review-form/review-form';
import Loader from '../../components/loader/loader';
import NotFoundPage from '../not-found-page/not-found-page';

import {NewReview} from '../../types/review';
import {AppRoute} from '../../constants';

function ReviewPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {id} = useParams();
  const filmId = Number(id);

  const film = useAppSelector(getFilm);
  const isFilmLoading = useAppSelector(getIsFilmLoading);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && filmId) {
      dispatch(fetchFilmById(filmId));
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, filmId]);

  const handleReviewFormSubmit = (review: NewReview) => {
    dispatch(postReview({filmId, review}));
    navigate(`${generatePath(AppRoute.Film, {id: `${filmId}`})}?tab=Reviews`);
  };

  if (isFilmLoading) {
    return <Loader />;
  }

  if (!film || !id) {
    return <NotFoundPage />;
  }

  const {name, posterImage, backgroundImage, backgroundColor} = film;

  return (
    <section className="film-card film-card--full" style={{backgroundColor}}>
      <Helmet>
        <title>WTW: {name}</title>
      </Helmet>

      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  className="breadcrumbs__link"
                  to={generatePath(AppRoute.Film, {id: `${id}`})}
                >
                  {name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link
                  className="breadcrumbs__link"
                  to={generatePath(AppRoute.Review, {id: `${id}`})}
                >
                  Add review
                </Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} width="218" height="327" alt={name} />
        </div>
      </div>

      <ReviewForm onSubmit={handleReviewFormSubmit} />

    </section>
  );
}

export default ReviewPage;
