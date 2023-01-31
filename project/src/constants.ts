export enum AppRoute {
  Main = '/',
  Login = '/login',
  Film = '/films/:id',
  Player = '/player/:id',
  Review = '/films/:id/review',
  MyList = '/mylist',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Authorization = 'AUTHORIZATION',
  NoAuthorization = 'NO_AUTHORIZATION',
  Unknown = 'UNKNOWN'
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export enum Genre {
  Default = 'All genres',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thrillers'
}
