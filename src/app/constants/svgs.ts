import {Image, ImageSourcePropType} from 'react-native';

const getSvgUri = (source: ImageSourcePropType) => {
  return Image.resolveAssetSource(source).uri;
};

export const ARROW_RIGHT_URI = getSvgUri(
  require('../../../assets/svg/arrowRight.svg'),
);
export const NOTIFICATIONS = getSvgUri(
  require('../../../assets/svg/notifications.svg'),
);
export const SECURITY_SYSTEM = getSvgUri(
  require('../../../assets/svg/securitySystem.svg'),
);
export const ALERT_TRIANGLE = getSvgUri(
  require('../../../assets/svg/alertTriangle.svg'),
);
export const LEAF_PAPERLESS = getSvgUri(
  require('../../../assets/svg/leafPaperless.svg'),
);
export const PERSON_ADD = getSvgUri(
  require('../../../assets/svg/personAdd.svg'),
);
export const CONTACTLESS = getSvgUri(
  require('../../../assets/svg/contactless.svg'),
);
export const CROSS = getSvgUri(require('../../../assets/svg/cross.svg'));
export const SORTING = getSvgUri(require('../../../assets/svg/sorting.svg'));
export const CARD = getSvgUri(require('../../../assets/svg/card.svg'));
export const GLOBE = getSvgUri(require('../../../assets/svg/globe.svg'));
export const LOOP = getSvgUri(require('../../../assets/svg/loop.svg'));
export const WALLET = getSvgUri(require('../../../assets/svg/wallet.svg'));
export const FACE_ID = getSvgUri(require('../../../assets/svg/faceId.svg'));
export const LINK = getSvgUri(require('../../../assets/svg/link.svg'));
export const DASH = getSvgUri(require('../../../assets/svg/dash.svg'));
