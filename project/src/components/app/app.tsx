import MainPage from '../../pages/main-page/main-page';
import {promoFilm} from '../../mock/promo-film';
import {FILM_COUNT} from '../../constants';

function App(): JSX.Element {
  return (
    <MainPage
      promoFilm={promoFilm}
      filmCount={FILM_COUNT}
    />
  );
}

export default App;
