import {DefaultTheme} from 'styled-components/native';

enum BrandColors {
  Primary = '#E35205',
  Secondary = '#F98E20',
  DisabledPrimary = '#D6D6D6',
  NoSelectedTab = '#ADADAD',
  Success = '#7A9A02',
}

export const CommonTheme: DefaultTheme = {
  color: {
    primary: BrandColors.Primary,
    secondary: BrandColors.Secondary,
    disabledPrimary: BrandColors.DisabledPrimary,
    noSelectedTab: BrandColors.NoSelectedTab,
    success: BrandColors.Success,
  },
};
