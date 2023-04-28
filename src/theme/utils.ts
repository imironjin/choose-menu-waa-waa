export const rem = (value: number | string, baseValue = 16): string => {
  return `${Number(value) / baseValue}rem`;
};
