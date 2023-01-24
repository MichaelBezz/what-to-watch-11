import {Link, generatePath} from 'react-router-dom';

import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import ReviewForm from '../../components/review-form/review-form';

import {Film} from '../../types/film';
import {AppRoute} from '../../constants';

type ReviewPageProps = {
  film: Film;
};

function ReviewPage({film}: ReviewPageProps): JSX.Element {
  const {
    id,
    name,
    posterImage,
    backgroundImage,
    backgroundColor
  } = film;

  return (
    <section className="film-card film-card--full" style={{backgroundColor}}>
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

      <ReviewForm />

    </section>
  );
}

export default ReviewPage;
