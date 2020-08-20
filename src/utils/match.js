export const matchText = (text, object) => {
  if (typeof object === 'string') return object.toLowerCase().includes(text);
  return Object.values(object).some((value) => matchText(text, value));
};
