import {ImageSourcePropType} from 'react-native';

export enum CardType {
  MASTERCARD = 'Mastercard',
  VISA = 'Visa',
  AMEX = 'American Express',
}

export type Card = {
  id: number;
  userId: number;
  number: number;
  expirationMonth: number;
  expirationYear: number;
  cvc: number;
  typeCard: CardType;
  isLocked: boolean;
  cardImage: ImageSourcePropType;
  cardImageLocked: ImageSourcePropType;
  currentBalance: number;
  totalCreditLimit: number;
  statementBalance: number;
  minimunPayment: number;
  daysToPay: number;
};

export type Transaction = {
  id: number;
  userId: number;
  cardId: number;
  establishment: string;
  establishmentImage: ImageSourcePropType;
  date: string;
  payment: number;
  applyPoints: boolean;
  isInProcess: boolean;
  pointAcumulated?: number;
};
