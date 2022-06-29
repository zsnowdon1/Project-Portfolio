export interface Sport {
  genre: string;
  selected: boolean;
}

export interface Finance {
  genre: string;
  selected: boolean;
}

export enum SportTypes {
  Basketball,
  Football,
  Soccer,
  Golf,
  Baseball,
}

export enum FinanceTypes {
  Stocks,
  HedgeFunds,
  WallStreet,
}

export interface NewsItem {
  title: string;
  subtitle: string;
  url: string;
}