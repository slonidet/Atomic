export default (value = '', type = null) => {
  switch (type) {
    case 'capitalize': return value.toUpperCase();
    default: return value;
  }
};
