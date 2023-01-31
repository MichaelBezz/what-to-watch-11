import {faker} from '@faker-js/faker';
import {Films, Film} from '../types/film';
import {Genre} from '../constants';

export const createFilm = (id: number): Film => ({
  id,
  name: faker.lorem.sentence(3),
  posterImage: faker.image.image(274, 410, true),
  previewImage: faker.image.image(280, 175, true),
  backgroundImage: faker.image.image(1300, 552, true),
  backgroundColor: faker.color.rgb({format: 'hex', casing: 'lower'}),
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: faker.lorem.sentences(2),
  rating: faker.datatype.number({min: 1, max: 10, precision: 0.1}),
  scoresCount: faker.datatype.number(300),
  director: faker.name.fullName(),
  starring: Array.from({length: 3}, () => faker.name.fullName()),
  runTime: faker.datatype.number(120),
  genre: faker.helpers.arrayElement([...Object.values(Genre)]),
  released: faker.datatype.number({min: 1990, max: 2023}),
  isFavorite: faker.datatype.boolean()
});

export const createFilms = (count = 8): Films =>
  Array.from({length: count}, (_, index) => createFilm(index + 1));

export const film = createFilm(1);
export const films = createFilms(15);
