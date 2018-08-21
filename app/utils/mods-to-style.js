export default (mods, styleSheet) => {
  const styleArray = [styleSheet.default];
  for (const [key, value] of Object.entries(mods)) {
    const style = styleSheet[`${key}_${value}`];
    if (style != null) styleArray.push(style);
  }
  return styleArray;
};
