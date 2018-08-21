export default (target, complexKey, defaultValue = null) => {
  const keys = complexKey.split('.');
  let value = target;
  for (const key of keys) {
    if (value == null) return defaultValue;
    value = value[key];
  }
  return value;
};
