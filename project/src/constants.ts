export enum AppRoute {
  Root = '/',
  Login = '/login',
  Movie = '/films/:id',
  Player = '/player/:id',
  Review = '/films/:id/review',
  MyList = '/mylist',
  NotFound = '*'
}

export const FILM_COUNT = 20;
