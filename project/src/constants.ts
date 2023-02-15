export enum AppRoute {
  Main = '/',
  Login = '/login',
  Film = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id',
  MyList = '/mylist',
  NotFound = '*'
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Films = '/films',
  SimilarFilms = '/similar',
  FavoriteFilms = '/favorite',
  PromoFilm = '/promo',
  Reviews = '/comments'
}

export enum AuthorizationStatus {
  Authorized = 'AUTHORIZED',
  NoAuthorized = 'NO_AUTHORIZED',
  Unknown = 'UNKNOWN'
}

export enum Reducer {
  User = 'USER',
  Films = 'FILMS',
  SimilarFilms = 'SIMILAR_FILMS',
  FavoriteFilms = 'FAVORITE_FILMS',
  Film = 'FILM',
  PromoFilm = 'PROMO_FILM',
  Reviews = 'REVIEWS'
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export const DEFAULT_GENRE = 'All genres';
