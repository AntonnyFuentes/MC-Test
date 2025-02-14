import {
  CARD_ORANGE,
  CARD_ORANGE_LOCKED,
  AMAZON_LOGO,
  NETFLIX_LOGO,
  SPOTIFY_LOGO,
  STARBUCKS_LOGO,
  UBER_EATS_LOGO,
  DUNKIN_DONUTS_LOGO,
} from '../constants/images';
import {Card, CardType, Transaction} from './types';

export const dummyCards: Card[] = [
  {
    id: 1,
    userId: 296920472,
    number: 5426123456781234,
    expirationMonth: 9,
    expirationYear: 25,
    cvc: 242,
    typeCard: CardType.MASTERCARD,
    isLocked: false,
    cardImage: CARD_ORANGE,
    cardImageLocked: CARD_ORANGE_LOCKED,
    currentBalance: 1000,
    totalCreditLimit: 10000,
    statementBalance: 600,
    minimunPayment: 60,
    daysToPay: 5,
  },
  {
    id: 2,
    userId: 296920472,
    number: 5426837498253855,
    expirationMonth: 10,
    expirationYear: 28,
    cvc: 837,
    typeCard: CardType.MASTERCARD,
    isLocked: false,
    cardImage: CARD_ORANGE,
    cardImageLocked: CARD_ORANGE_LOCKED,
    currentBalance: 8000,
    totalCreditLimit: 23000,
    statementBalance: 7405.73,
    minimunPayment: 1900.36,
    daysToPay: 1,
  },
  {
    id: 3,
    userId: 296920472,
    number: 5426938462039847,
    expirationMonth: 2,
    expirationYear: 27,
    cvc: 492,
    typeCard: CardType.MASTERCARD,
    isLocked: false,
    cardImage: CARD_ORANGE,
    cardImageLocked: CARD_ORANGE_LOCKED,
    currentBalance: 10435.89,
    totalCreditLimit: 11000,
    statementBalance: 9086.34,
    minimunPayment: 3049.87,
    daysToPay: 9,
  },
];

export const dummuyTransactions: Transaction[] = [
  {
    id: 28303392892,
    cardId: 1,
    userId: 296920472,
    establishment: 'Starbucks',
    establishmentImage: STARBUCKS_LOGO,
    payment: 5.43,
    applyPoints: true,
    pointAcumulated: 5,
    isInProcess: false,
    date: '2021-10-12 08:23:00AM',
  },
  {
    id: 28032722892,
    cardId: 1,
    userId: 296920472,
    establishment: 'Amazon',
    establishmentImage: AMAZON_LOGO,
    payment: 125.3,
    applyPoints: true,
    pointAcumulated: 125,
    isInProcess: false,
    date: '2021-10-12 02:23:00PM',
  },
  {
    id: 28033103992,
    cardId: 1,
    userId: 296920472,
    establishment: 'Dunkin Doonuts',
    establishmentImage: DUNKIN_DONUTS_LOGO,
    payment: 10.84,
    applyPoints: true,
    pointAcumulated: 10,
    isInProcess: false,
    date: '2021-10-12 06:18:00PM',
  },
  {
    id: 47603392892,
    cardId: 2,
    userId: 296920472,
    establishment: 'Netflix',
    establishmentImage: NETFLIX_LOGO,
    payment: 11.49,
    applyPoints: false,
    isInProcess: false,
    date: '2022-11-12 08:00:00AM',
  },
  {
    id: 20292722892,
    cardId: 2,
    userId: 296920472,
    establishment: 'Spotify',
    establishmentImage: SPOTIFY_LOGO,
    payment: 9.99,
    applyPoints: true,
    pointAcumulated: 1,
    isInProcess: false,
    date: '2022-11-24 09:00:00AM',
  },
  {
    id: 28033387992,
    cardId: 3,
    userId: 296920472,
    establishment: 'Dunkin Doonuts',
    establishmentImage: DUNKIN_DONUTS_LOGO,
    payment: 10.84,
    applyPoints: true,
    pointAcumulated: 10,
    isInProcess: false,
    date: '2022-01-08 09:36:00AM',
  },
  {
    id: 28033204692,
    cardId: 3,
    userId: 296920472,
    establishment: 'Uber Eats',
    establishmentImage: UBER_EATS_LOGO,
    payment: 23.46,
    applyPoints: true,
    pointAcumulated: 23,
    isInProcess: false,
    date: '2022-02-26 4:54:00PM',
  },
];
