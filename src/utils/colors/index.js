const mainColors = {
  green2: '#EDFCFD',
  dark1: '#3F3F69',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E5E5E6',
  grey3: '#EDEEF0',
  grey4: '#B1B7C2',
  blue1: '#65AFCD',
  black1: '#000000',
  black2: 'rgba(0,0,0,0.5)',
  red1: '#FF0000',
};
export const colors = {
  primary: mainColors.blue1,
  secondary: mainColors.dark1,
  tertiary: mainColors.grey1,
  white: '#FFFFFF',
  black: '#000000',
  disable: mainColors.grey3,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.blue1,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.blue1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
    disable: {
      background: mainColors.grey3,
      text: mainColors.grey4,
    },
  },
  border: mainColors.grey1,
  cardLight: mainColors.green2,
  loadingBackground: mainColors.black2,
  error: mainColors.red1,
};
