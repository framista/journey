const formatSingleNumber = (number) => (number < 10 ? '0' + number : number);

export const formatDate = ({ day, month, year }) =>
  `${formatSingleNumber(day)}.${formatSingleNumber(month)}.${year}`;
