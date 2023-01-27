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
