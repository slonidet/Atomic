import Colors from './colors';

export const themeBaseColors = {
  mainColor: 'hsl(90, 73%, 38%)',
  secondaryColor: 'hsl(215, 11%, 56%)',
};

export default {
  mainBackground: Colors.whiteBlue,
  headerMainBackground: Colors.lightGreen,
  buttonMainBackgroundColor: themeBaseColors.mainColor,
  buttonMainTextColor: Colors.white,
  buttonSecondaryBackgroundColor: Colors.white,
  buttonSecondaryTextColor: 'hsl(174, 100%, 29%)',
  buttonDisabledBackgroundColor: Colors.lightGrey,
  buttonDisabledTextColor: themeBaseColors.secondaryColor,
  inputMainBaseColor: themeBaseColors.secondaryColor,
  inputMainTintColor: themeBaseColors.mainColor,
  inputMainTextColor: themeBaseColors.mainColor,
  linkMainColor: themeBaseColors.mainColor,
  textMainColor: themeBaseColors.secondaryColor,
  textSecondaryColor: Colors.darkBlue,
};