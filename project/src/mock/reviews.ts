import {faker} from '@faker-js/faker';
import {Reviews, Review} from '../types/review';

export const createReview = (id: number): Review => ({
  comment: faker.lorem.sentence(2),
  date: faker.date.past(1).toString(),
  id,
  rating: faker.datatype.number({min: 1, max: 10, precision: 0.1}),
  user: {
    id: faker.datatype.number({max: 30}),
    name: faker.name.fullName()
  }
});

export const createReviews = (count = 6): Reviews =>
  Array.from({length: count}, (_, index) => createReview(index + 1));

export const review = createReview(1);
export const reviews = createReviews();
