import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {Films} from '../../types/film';

type FilmListProps = {
  films: Films;
};

function FilmsList({films}: FilmListProps): JSX.Element {
  const [, setActiveCard] = useState<number | null>(null);

  return(
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          onActiveCard={setActiveCard}
        />
      ))}
    </div>
  );
}

export default FilmsList;
