import {
  SECURITY_SYSTEM,
  NOTIFICATIONS,
  CARD,
  SORTING,
  FACE_ID,
  WALLET,
  LOOP,
  LEAF_PAPERLESS,
  ALERT_TRIANGLE,
  GLOBE,
  CONTACTLESS,
  DASH,
  LINK,
  PERSON_ADD,
} from '../../constants/svgs';

export interface MainCardControls {
  svg: string;
  text: string;
  navigationScreen: string;
}

export interface SecuritySettings extends MainCardControls {
  subtitle?: string;
}

export const securitySettings: SecuritySettings[] = [
  {
    svg: FACE_ID,
    navigationScreen: '',
    subtitle: 'enabled',
    text: 'faceID',
  },
  {
    svg: WALLET,
    navigationScreen: '',
    subtitle: 'open',
    text: 'appleWallet',
  },
  {
    svg: LOOP,
    navigationScreen: '',
    subtitle: 'enabled',
    text: 'autoPlay',
  },
  {
    svg: LEAF_PAPERLESS,
    navigationScreen: '',
    subtitle: 'enrolled',
    text: 'onlineStatements',
  },
];

export const usersSubscriptions: SecuritySettings[] = [
  {
    svg: LINK,
    navigationScreen: '',
    subtitle: '3',
    text: 'manageSubscriptions',
  },
  {
    svg: PERSON_ADD,
    navigationScreen: '',
    subtitle: '1',
    text: 'authorizedUsers',
  },
];

export const spendSettings: SecuritySettings[] = [
  {
    svg: ALERT_TRIANGLE,
    navigationScreen: '',
    text: 'spendLimitSetting',
  },
  {
    svg: GLOBE,
    navigationScreen: '',
    text: 'overseasSpendSettings',
  },
];

export const extraSettings: SecuritySettings[] = [
  {
    svg: CONTACTLESS,
    navigationScreen: '',
    text: 'tapAndPay',
  },
  {
    svg: DASH,
    navigationScreen: '',
    text: 'ficoScore',
  },
];

export const mainCardControlsOptions: MainCardControls[] = [
  {
    svg: SECURITY_SYSTEM,
    text: 'resetPin',
    navigationScreen: '',
  },
  {
    svg: NOTIFICATIONS,
    text: 'notifications',
    navigationScreen: '',
  },
  {
    svg: CARD,
    text: 'newCardRequest',
    navigationScreen: '',
  },
  {
    svg: SORTING,
    text: 'adjustCreditLimit',
    navigationScreen: '',
  },
];
