import {faker} from '@faker-js/faker';
import {UserData} from '../types/user';
import {Films, Film} from '../types/film';
import {Reviews, Review} from '../types/review';

export const makeFakeUser = (id = 1): UserData => ({
  id,
  avatarUrl: faker.internet.url(),
  email: faker.internet.email(),
  name: faker.name.fullName(),
  token: faker.lorem.sentence(1)
});

export const makeFakeFilm = (id = 1): Film => ({
  id,
  name: faker.lorem.sentence(3),
  posterImage: faker.image.image(274, 410, true),
  previewImage: faker.image.image(280, 175, true),
  backgroundImage: faker.image.image(1300, 552, true),
  backgroundColor: faker.color.rgb({format: 'hex', casing: 'lower'}),
  videoLink: faker.internet.url(),
  previewVideoLink: faker.internet.url(),
  description: faker.lorem.sentences(2),
  rating: faker.datatype.number({min: 1, max: 10, precision: 0.1}),
  scoresCount: faker.datatype.number(300),
  director: faker.name.fullName(),
  starring: Array.from({length: 3}, () => faker.name.fullName()),
  runTime: faker.datatype.number(120),
  genre: faker.lorem.sentence(1),
  released: faker.datatype.number({min: 1990, max: 2023}),
  isFavorite: faker.datatype.boolean()
});

export const makeFakeReview = (id = 1): Review => ({
  id,
  comment: faker.lorem.sentence(2),
  date: faker.date.past(1).toString(),
  rating: faker.datatype.number({min: 1, max: 10, precision: 0.1}),
  user: {
    id: faker.datatype.number({max: 30}),
    name: faker.name.fullName()
  }
});

export const makeFakeFilms = (count = 8): Films =>
  Array.from({length: count}, (_, index) => makeFakeFilm(index + 1));

export const makeFakeReviews = (count = 6): Reviews =>
  Array.from({length: count}, (_, index) => makeFakeReview(index + 1));
