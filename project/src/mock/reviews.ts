import {faker} from '@faker-js/faker';
import {Reviews, Review} from '../types/review';

export const createReview = (): Review => ({
  comment: faker.lorem.sentence(2),
  date: faker.date.past(1).toString(),
  id: faker.datatype.number({max: 30}),
  rating: faker.datatype.number({min: 1, max: 10, precision: 0.1}),
  user: {
    id: faker.datatype.number({max: 30}),
    name: faker.name.fullName()
  }
});

export const createReviews = (count = 3): Reviews =>
  Array.from({length: count}, createReview);

export const review = createReview();
export const reviews = createReviews();
